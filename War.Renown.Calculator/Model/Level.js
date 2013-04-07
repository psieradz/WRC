var Wrc;
(function (Wrc) {
    /// <reference path="Trait.ts" />
    /// <reference path="Ilevel.ts" />
    (function (Model) {
        var Level = (function () {
            function Level() { }
            Object.defineProperty(Level.prototype, "Description", {
                get: function () {
                    return this._description;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Level.prototype, "Cost", {
                get: function () {
                    return this._cost;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Level.prototype, "Selected", {
                get: function () {
                    return this._selected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Level.prototype, "Trait", {
                get: function () {
                    return this._trait;
                },
                enumerable: true,
                configurable: true
            });
            return Level;
        })();
        Model.Level = Level;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Level.js.map
