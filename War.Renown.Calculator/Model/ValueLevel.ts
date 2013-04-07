/// <reference path="ILevel.ts" />
/// <reference path="IHaveValue.ts" />
module Wrc.Model
{
    export class ValueLevel implements ILevel, IHaveValue
    {
        Description: string;
        Cost: number;
        Selected: bool;
        BelongsTo: Trait;
        Value: number;

        constructor(description : string)
        {
            this.Description = description;
        }
    }
}