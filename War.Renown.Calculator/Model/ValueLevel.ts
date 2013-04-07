/// <reference path="ILevel.ts" />

module Wrc.Model
{
    export class ValueLevel implements ILevel
    {
        Description: string;
        Cost: number;
        Selected: bool;
        Trait: Trait;
        Value: number;
    }
}