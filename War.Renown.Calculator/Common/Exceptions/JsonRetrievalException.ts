/// <reference path="Exception.ts" />
module Wrc.Common.Exceptions
{
    export class JsonRetrievalException extends Exception
    {
        public name: string = "JsonRetrievalException";
        public message: string;

        constructor(message?: string)
        {
            super(message);
        }
    }
}