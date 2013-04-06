/// <reference path="Trait.ts" />
/// <reference path="Ilevel.ts" />
module Wrc.Model
{
    export class Level implements ILevel
    {
        Description: string;
        Cost: number;
        Selected: bool;
        BelongsTo: Trait;
    }
}
