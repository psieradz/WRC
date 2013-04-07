/// <reference path="../Model/Collections/ILevelCollection.ts" />
/// <reference path="../Model/Category.ts" />

module Wrc.Model
{
    export class Trait
    {        
        Category: Category;
        Name: string;

        constructor(category: Category, name: string)
        {
            this.Category = category;
            this.Name = name;
        }
    }
}