/// <reference path="..\Common\IHandleGetJson.ts" />
/// <reference path="..\Api\jquery.d.ts" />
/// <reference path="..\Common\Exceptions\Exception.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />

import Common = Wrc.Common;

module Wrc.Model
{
    export class Repository
    {
        private _handler: Common.IHandleGetJson;
        private _sourcePath: any;
        private _rawData: any;

        constructor(public sourcePath: string, handler: Common.IHandleGetJson) {
            this._sourcePath = sourcePath;
            this._handler = handler;
        }
        
        Get() : any
        {
            $.ajaxSetup({ async:false })
            if (this._handler.Data == null)
                try
                {
                    this.Read();
                }
                finally
                {
                    $.ajaxSetup({ async: true })
                }
            this._rawData = JSON.parse(this._handler.Data);
            return this._rawData;
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