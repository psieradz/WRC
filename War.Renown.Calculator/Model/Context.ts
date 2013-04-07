/// <reference path="../Model/Collections/TraitCollection.ts" />
/// <reference path="../Model/Collections/CategoryCollection.ts" />
/// <reference path="../Model/Collections/ILevelCollection.ts" />

import Collections = Wrc.Model.Collections;

module Wrc.Model
{
    export class Context
    {
        private _connectionString: string;

        Categories: Collections.CategoryCollection;

        Traits: Collections.TraitCollection;

        Levels: Collections.ILevelCollection;

        constructor(connectionString: string)
        {
            this.Initalize(connectionString);
        }

        private Initalize(connectionString: string)
        {
            this._connectionString = connectionString;
            this.Categories = new Collections.CategoryCollection();
            this.Traits = new Collections.TraitCollection();
            this.Levels = new Collections.ILevelCollection();
        }
        
    }
}