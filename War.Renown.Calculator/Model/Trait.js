var Wrc;
(function (Wrc) {
    /// <reference path="../Model/Category.ts" />
    (function (Model) {
        var Trait = (function () {
            function Trait(category, name) {
                this._category = category;
                this._name = name;
            }
            Object.defineProperty(Trait.prototype, "Category", {
                get: function () {
                    return this._category;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Trait.prototype, "Name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            return Trait;
        })();
        Model.Trait = Trait;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Trait.js.map
