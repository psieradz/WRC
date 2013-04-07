var Wrc;
(function (Wrc) {
    /// <reference path="ILevel.ts" />
    (function (Model) {
        var ValueLevel = (function () {
            function ValueLevel(description, cost, trait, value) {
                this.Description = description;
                this.Cost = cost;
                this.Trait = trait;
                this.Value = value;
                this.Selected = false;
            }
            return ValueLevel;
        })();
        Model.ValueLevel = ValueLevel;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=ValueLevel.js.map
