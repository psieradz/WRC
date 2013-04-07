/// <reference path="../Category.ts" />
/// <reference path="../../Common/CollectionBase.ts" />

module Wrc.Model.Collections 
{
    export class CategoryCollection extends Wrc.Common.CollectionBase
    {
        public Add(item : Category)
        {
            super.Add(item);
        }

        public IndexOf(item: Category)
        {
            return super.IndexOf(item);
        }
    }
}