/// <reference path="Exception.ts" />
module Wrc.Common.Exceptions
{
    export class JsonRetrievalException extends Exception
    {
        constructor(message?: string)
        {
            super.name = "JsonRetrievalException";
            super(message);
        }
    }
}