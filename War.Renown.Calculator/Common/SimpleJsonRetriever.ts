/// <reference path="IHandleGetJson.ts" />
module Wrc.Common
{
    export class SimpleJsonRetriever implements IHandleGetJson
    {
        private _randomNumber: number = 4007005;
        Data: string = null;
        
        Store(data: any)
        {
            var self = this;
            window.localStorage.setItem(this._randomNumber.toString(), JSON.stringify(data));
            self.Data = localStorage.getItem(this._randomNumber.toString());
        }
    }
}