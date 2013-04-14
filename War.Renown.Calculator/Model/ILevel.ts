/// <reference path="Trait.ts" />
/// <reference path="../Api/knockout.d.ts" />

module Wrc.Model
{
    export interface ILevel
    {
        _description: string;
        _cost: number;
        _selected: bool;
        _traitName: string;
    }
}