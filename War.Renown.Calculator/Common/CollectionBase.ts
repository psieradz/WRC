module Wrc.Common
{
    export class CollectionBase
    {
        private _items = [];

        public GetItems()
        {
            return this._items;
        }

        public Count()
        {
            return this._items.length;
        }

        public Add(item)
        {
            this._items.push(item);
        }

        public IndexOf(obj, fromIndex?: number)
        {
            if (fromIndex == null) {
                fromIndex = 0;
            } else if (fromIndex < 0) {
                fromIndex = Math.max(0, this._items.length + fromIndex);
            }
            for (var i = fromIndex, j = this._items.length; i < j; i++) {
                if (this._items[i] === obj)
                    return i;
            }
            return -1;
        }
    }
}