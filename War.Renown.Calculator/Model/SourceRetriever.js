var Common = Wrc.Common;
var Wrc;
(function (Wrc) {
    (function (Model) {
        var SourceRetriever = (function () {
            function SourceRetriever(jsonSource, jsonHandler) {
                this.jsonSource = jsonSource;
                this.jsonSource = jsonSource;
                this.jsonHandler = jsonHandler;
            }
            SourceRetriever.prototype.RetrieveSource = function () {
                var _this = this;
                var result = true;
                $.getJSON(this.jsonSource, function (data) {
                    _this.jsonHandler.Save(data);
                }).fail(result = false);
                return result;
            };
            SourceRetriever.prototype.DoIt = function () {
                var source = JSON.parse(this.jsonHandler.RetrieveAsString());
            };
            return SourceRetriever;
        })();
        Model.SourceRetriever = SourceRetriever;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=SourceRetriever.js.map
