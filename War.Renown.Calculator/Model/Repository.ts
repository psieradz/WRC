/// <reference path="..\Api\jquery.d.ts" />
/// <reference path="..\Api\linq.d.ts" />
/// <reference path="..\Common\IHandleGetJson.ts" />
/// <reference path="..\Common\Exceptions\Exception.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Model\ValueLevel.ts" />

import Common = Wrc.Common;

module Wrc.Model
{
    export class Repository
    {
        private _handler: Common.IHandleGetJson;
        private _sourcePath: any;

        constructor(public sourcePath: string, handler: Common.IHandleGetJson) {
            this._sourcePath = sourcePath;
            this._handler = handler;
        }
        
        Get() : any
        {
            $.ajaxSetup({ async: false, cache: false })

            if (this._handler.Data == null)
                try
                {
                    this.Read();
                }
                finally
                {
                    $.ajaxSetup({ async: true, cache:true })
                }
                
                           
            var query =
                Enumerable.From(JSON.parse(this._handler.Data))
                .Select(root => root.Categories)
                .ToArray();
                
        }

        private Read(): any
        {
            var self = this;
            $.getJSON(self._sourcePath)
            .fail((response) =>
            {
               throw new Error(response.status + ' ' + response.statusText)
               //throw new Common.Exceptions.JsonRetrievalException(response.statusText);
            })
            .done((data) => self._handler.Store(data)) 
        }

    }
}