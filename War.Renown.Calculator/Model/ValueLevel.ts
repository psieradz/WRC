/// <reference path="ILevel.ts" />

module Wrc.Model
{
    export class ValueLevel implements ILevel
    {
        private _description: string;
        private _cost: number;
        private _selected: bool;
        private _traitName: string;
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

        set Selected(value:bool)
        {
            this._selected = value;
        }

        get Trait(): string
        {
            return this._traitName;
        }

        get Value(): number
        {
            return this._value;
        }
        
        constructor(description: string, cost: number, traitName: string, value: number)
        {
            this._description = description;
            this._cost = cost;
            this._traitName = traitName;
            this._value = value;
            this._selected = false;
        }
    }
}