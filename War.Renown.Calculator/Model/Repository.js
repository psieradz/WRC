var Common = Wrc.Common;
var Collections = Wrc.Model.Collections;
var Wrc;
(function (Wrc) {
    (function (Model) {
        var Repository = (function () {
            function Repository(sourcePath, handler) {
                this.sourcePath = sourcePath;
                this._sourcePath = sourcePath;
                this._handler = handler;
            }
            Repository.prototype.GetRawData = function () {
                var self = this;
                if(this._handler.Data == null) {
                    try  {
                        $.ajaxSetup({
                            async: false,
                            cache: false
                        });
                        $.getJSON(self._sourcePath).fail(function (response) {
                            throw new Wrc.Common.Exceptions.JsonRetrievalException(response.statusText);
                        }).done(function (data) {
                            return self._handler.Store(data);
                        });
                        this._rawData = JSON.parse(this._handler.Data);
                    }finally {
                        $.ajaxSetup({
                            async: true,
                            cache: true
                        });
                    }
                }
            };
            Repository.prototype.GetCategories = function () {
                return;
                Enumerable.From(this._rawData).Select(function (root) {
                    return root.Categories.Name;
                }).ToArray();
            };
            return Repository;
        })();
        Model.Repository = Repository;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Repository.js.map
