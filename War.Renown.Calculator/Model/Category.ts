module Wrc.Model
{
    export class Category
    {
        private _name: string;

        get Name(): string
        {
            return this._name;
        }

        constructor(name: string)
        {
            this._name = name;
        }
    }
}