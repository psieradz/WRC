/// <reference path="IHandleGetJson.ts" />
module Wrc.Common
{
    export class SimpleJsonRetriever implements IHandleGetJson
    {
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