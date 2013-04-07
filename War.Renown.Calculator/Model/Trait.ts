/// <reference path="../Model/Category.ts" />

module Wrc.Model
{
    export class Trait
    {
        private _category: Category;
        private _name: string;

        get Category(): Category
        {
            return this._category;
        }

        get Name(): string
        {
            return this._name;
        }

        constructor(category: Category, name: string)
        {
            this._category= category;
            this._name = name;
        }
    }
}