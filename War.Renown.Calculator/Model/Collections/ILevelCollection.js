var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wrc;
(function (Wrc) {
    (function (Model) {
        /// <reference path="../ILevel.ts" />
        /// <reference path="../../Common/CollectionBase.ts" />
        (function (Collections) {
            var ILevelCollection = (function (_super) {
                __extends(ILevelCollection, _super);
                function ILevelCollection() {
                    _super.apply(this, arguments);

                }
                ILevelCollection.prototype.Add = function (item) {
                    _super.prototype.Add.call(this, item);
                };
                ILevelCollection.prototype.IndexOf = function (item) {
                    return _super.prototype.IndexOf.call(this, item);
                };
                return ILevelCollection;
            })(Wrc.Common.CollectionBase);
            Collections.ILevelCollection = ILevelCollection;            
        })(Model.Collections || (Model.Collections = {}));
        var Collections = Model.Collections;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=ILevelCollection.js.map
