var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wrc;
(function (Wrc) {
    (function (Model) {
        (function (Collections) {
            var CategoryCollection = (function (_super) {
                __extends(CategoryCollection, _super);
                function CategoryCollection() {
                    _super.apply(this, arguments);

                }
                CategoryCollection.prototype.Add = function (item) {
                    _super.prototype.Add.call(this, item);
                };
                CategoryCollection.prototype.IndexOf = function (item) {
                    return _super.prototype.IndexOf.call(this, item);
                };
                return CategoryCollection;
            })(Wrc.Common.CollectionBase);
            Collections.CategoryCollection = CategoryCollection;            
        })(Model.Collections || (Model.Collections = {}));
        var Collections = Model.Collections;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=CategoryCollection.js.map
