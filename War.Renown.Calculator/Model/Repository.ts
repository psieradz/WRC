/// <reference path="..\Api\jquery.d.ts" />
/// <reference path="..\Api\linq.d.ts" />
/// <reference path="..\Common\IHandleGetJson.ts" />
/// <reference path="..\Common\Exceptions\Exception.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Model\ValueLevel.ts" />
/// <reference path="..\Model\Collections\CategoryCollection.ts" />

import Common = Wrc.Common;
import Collections = Wrc.Model.Collections;

module Wrc.Model
{
    export class Repository
    {
        private _handler: Common.IHandleGetJson;
        private _sourcePath: any;
        private _rawData : any;

        constructor(public sourcePath: string, handler: Common.IHandleGetJson) {
            this._sourcePath = sourcePath;
            this._handler = handler;
        }
        
        private GetRawData() : any
        {
            var self = this;
            
            if (this._handler.Data == null)
            {
                try
                {
                    $.ajaxSetup({ async: false, cache: false })
                    $.getJSON(self._sourcePath)
                    .fail((response) =>
                    {
                        //throw new Error(response.status + ' ' + response.statusText)
                        throw new Common.Exceptions.JsonRetrievalException(response.statusText);
                    })
                    .done((data) =>
                        self._handler.Store(data)
                    )

                    this._rawData = JSON.parse(this._handler.Data);
                }
                finally
                {
                    $.ajaxSetup({ async: true, cache: true })
                }
            }
        }

        GetCategories(): any //Collections.CategoryCollection
        {
            return 
                Enumerable.From(this._rawData)
                    .Select(root => root.Categories.Name)
                    .ToArray();
        }
    }
}