var Wrc;
(function (Wrc) {
    /// <reference path="ILevel.ts" />
    (function (Model) {
        var ValueLevel = (function () {
            function ValueLevel(description, cost, trait, value) {
                this._description = description;
                this._cost = cost;
                this._trait = trait;
                this._value = value;
                this._selected = false;
            }
            Object.defineProperty(ValueLevel.prototype, "Description", {
                get: function () {
                    return this._description;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueLevel.prototype, "Cost", {
                get: function () {
                    return this._cost;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueLevel.prototype, "Selected", {
                get: function () {
                    return this._selected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueLevel.prototype, "Trait", {
                get: function () {
                    return this._trait;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueLevel.prototype, "Value", {
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            return ValueLevel;
        })();
        Model.ValueLevel = ValueLevel;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=ValueLevel.js.map
