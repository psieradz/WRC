/// <reference path="Exception.ts" />
module Wrc.Common.Exceptions
{
    export class JsonRetrievalException extends Exception
    {
        private _name: string = "JsonRetrievalException";
        private _message: string;

        get Name(): string
        {
            return this._name;
        }

        get Message(): string
        {
            return this._message;
        }

        set Message(value: string)
        {
            this._message = value;
        }

        constructor(message?: string)
        {
            super(message);
        }
    }
}