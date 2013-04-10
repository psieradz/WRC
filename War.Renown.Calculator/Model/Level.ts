/// <reference path="Trait.ts" />
/// <reference path="Ilevel.ts" />
module Wrc.Model
{
    export class Level implements ILevel
    {
        private _description: string;
        private _cost: number;
        private _selected: bool;
        private _traitName: string;

        get Description(): String
        {
            return this._description;
        }

        get Cost(): number
        {
            return this._cost;
        }

        get Selected(): bool
        {
            return this._selected;
        }

        get Trait(): string
        {
            return this._traitName;
        }
    }
}
