var Wrc;
(function (Wrc) {
    /// <reference path="ILevel.ts" />
    /// <reference path="../Api/knockout.d.ts" />
    (function (Model) {
        var ValueLevel = (function () {
            function ValueLevel(description, cost, traitName, value, selected) {
                this._description = description;
                this._cost = cost;
                this._traitName = traitName;
                this._value = value;
                this._selected = selected;
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
                set: function (value) {
                    this._selected = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueLevel.prototype, "Trait", {
                get: function () {
                    return this._traitName;
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
