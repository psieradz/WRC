module Wrc.Common.Exceptions
{
    export class Exception implements Error
    {
        public name: string = "Exception";
        public message: string;

        constructor(message?: string)
        {
            this.message = message;
        }
    }
}