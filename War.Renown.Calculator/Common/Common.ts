/// <reference path="Library\jquery-1.9.1.js" />
/// <reference path="Library\jquery.d.ts" />

export module Wrc.Common
{
    export class ModelParser
    {
        private jsonHandler: Common. IHandleGetJson;
        
        constructor(public jsonSource: string, jsonHandler: IHandleGetJson)
        {
            this.jsonSource = jsonSource;
            this.jsonHandler = jsonHandler;
        }

        RetrieveSource() : bool
        {
            var result = true;

            $.getJSON(
                this.jsonSource,
                (data) =>
                {
                    this.jsonHandler.Save(data);
                })
                .fail(result = false)

            return result;
        }

        DoIt()
        {
           var source = JSON.parse(this.jsonHandler.RetrieveAsString());
            
        }
    }

    export interface IHandleGetJson {
        Save(data: any);
        Retrieve(): any;
        RetrieveAsString(): string;
    }

    export class SimpleJsonRetriever implements IHandleGetJson {
        private _randomNumber: number = 4007005;

        Save(data: any) {
            window.localStorage.setItem(
                this._randomNumber.toString(),
                JSON.stringify(data));
        }

        Retrieve(): any {
            return window.localStorage.getItem(this._randomNumber.toString());
        }

        RetrieveAsString(): string {
            return JSON.stringify(this.Retrieve());
        }
    }
}
