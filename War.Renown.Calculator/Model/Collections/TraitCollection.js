var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wrc;
(function (Wrc) {
    (function (Model) {
        /// <reference path="../Trait.ts" />
        /// <reference path="../../Common/CollectionBase.ts" />
        (function (Collections) {
            var TraitCollection = (function (_super) {
                __extends(TraitCollection, _super);
                function TraitCollection() {
                    _super.apply(this, arguments);

                }
                TraitCollection.prototype.Add = function (item) {
                    _super.prototype.Add.call(this, item);
                };
                TraitCollection.prototype.IndexOf = function (item) {
                    return _super.prototype.IndexOf.call(this, item);
                };
                return TraitCollection;
            })(Wrc.Common.CollectionBase);
            Collections.TraitCollection = TraitCollection;            
        })(Model.Collections || (Model.Collections = {}));
        var Collections = Model.Collections;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=TraitCollection.js.map
