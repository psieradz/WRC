var Wrc;
(function (Wrc) {
    (function (Model) {
        var Trait = (function () {
            function Trait(category, name) {
                this.Category = category;
                this.Name = name;
            }
            return Trait;
        })();
        Model.Trait = Trait;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Trait.js.map
