module Wrc.Common
{
    export interface IHandleGetJson
    {
        Save(data: any);
        Retrieve(): any;
        RetrieveAsString(): string;
    }
}