/// <reference path="Trait.ts" />
module Wrc.Model
{
    export interface ILevel
    {
        Description: string;
        Cost: number;
        Selected: bool;
        BelongsTo: Trait;
    }
}