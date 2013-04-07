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

        constructor(description: string, cost: number, trait: Trait, value: number)
        {
            this.Description = description;
            this.Cost = cost;
            this.Trait = trait;
            this.Value = value;
            this.Selected = false;
        }
    }
}