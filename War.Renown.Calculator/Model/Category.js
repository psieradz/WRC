var Wrc;
(function (Wrc) {
    (function (Model) {
        (function (Category) {
            Category._map = [];
            Category._map[0] = "Attribute";
            Category.Attribute = 0;
            Category._map[1] = "OffensiveCrit";
            Category.OffensiveCrit = 1;
            Category._map[2] = "DefensiveCrit";
            Category.DefensiveCrit = 2;
            Category._map[3] = "Passive";
            Category.Passive = 3;
        })(Model.Category || (Model.Category = {}));
        var Category = Model.Category;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Category.js.map
