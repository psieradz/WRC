/// <reference path="ILevel.ts" />

module Wrc.Model
{
    export class ValueLevel implements ILevel
    {
        private _description: string;
        private _cost: number;
        private _selected: bool;
        private _trait: Trait;
        private _value: number;

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

        get Trait(): Trait
        {
            return this._trait;
        }

        get Value(): number
        {
            return this._value;
        }



        constructor(description: string, cost: number, trait: Trait, value: number)
        {
            this._description = description;
            this._cost = cost;
            this._trait = trait;
            this._value = value;
            this._selected = false;
        }
    }
}