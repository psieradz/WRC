var Collections = Wrc.Model.Collections;
var Wrc;
(function (Wrc) {
    (function (Model) {
        var Context = (function () {
            function Context(connectionString) {
                this.Initalize(connectionString);
            }
            Context.prototype.Initalize = function (connectionString) {
                this._connectionString = connectionString;
                this.Categories = new Model.Collections.CategoryCollection();
                this.Traits = new Model.Collections.TraitCollection();
                this.Levels = new Model.Collections.ILevelCollection();
            };
            return Context;
        })();
        Model.Context = Context;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Context.js.map
