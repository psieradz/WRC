var Wrc;
(function (Wrc) {
    (function (Common) {
        var CollectionBase = (function () {
            function CollectionBase() {
                this._items = [];
            }
            CollectionBase.prototype.GetItems = function () {
                return this._items;
            };
            CollectionBase.prototype.Count = function () {
                return this._items.length;
            };
            CollectionBase.prototype.Add = function (item) {
                this._items.push(item);
            };
            CollectionBase.prototype.ElementAt = function (index) {
                return this._items[index];
            };
            CollectionBase.prototype.IndexOf = function (obj, fromIndex) {
                if(fromIndex == null) {
                    fromIndex = 0;
                } else if(fromIndex < 0) {
                    fromIndex = Math.max(0, this._items.length + fromIndex);
                }
                for(var i = fromIndex, j = this._items.length; i < j; i++) {
                    if(this._items[i] === obj) {
                        return i;
                    }
                }
                return -1;
            };
            return CollectionBase;
        })();
        Common.CollectionBase = CollectionBase;        
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=CollectionBase.js.map
