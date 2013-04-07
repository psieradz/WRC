/// <reference path="../ILevel.ts" />
/// <reference path="../../Common/CollectionBase.ts" />

module Wrc.Model.Collections
{
    export class ILevelCollection extends Wrc.Common.CollectionBase
    {
        public Add(item: ILevel)
        {
            super.Add(item);
        }

        public IndexOf(item: ILevel)
        {
            return super.IndexOf(item);
        }
    }
}