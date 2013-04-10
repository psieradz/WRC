/// <reference path="../Model/Category.ts" />

module Wrc.Model
{
    export class Trait
    {
        private _categoryName: string;
        private _name: string;

        get Category(): string
        {
            return this._categoryName;
        }

        get Name(): string
        {
            return this._name;
        }

        constructor(categoryName: string, name: string)
        {
            this._categoryName= categoryName;
            this._name = name;
        }
    }
}