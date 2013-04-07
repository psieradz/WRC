var Wrc;
(function (Wrc) {
    (function (Model) {
        var Category = (function () {
            function Category(name) {
                this._name = name;
            }
            Object.defineProperty(Category.prototype, "Name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            return Category;
        })();
        Model.Category = Category;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Category.js.map
