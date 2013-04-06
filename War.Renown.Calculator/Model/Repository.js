var Common = Wrc.Common;
var Wrc;
(function (Wrc) {
    (function (Model) {
        var Repository = (function () {
            function Repository(sourcePath, handler) {
                this.sourcePath = sourcePath;
                this._sourcePath = sourcePath;
                this._handler = handler;
            }
            Repository.prototype.Get = function () {
                $.ajaxSetup({
                    async: false
                });
                if(this._handler.Data == null) {
                    try  {
                        this.Read();
                    }finally {
                        $.ajaxSetup({
                            async: true
                        });
                    }
                }
                this._rawData = JSON.parse(this._handler.Data);
                return this._rawData;
            };
            Repository.prototype.Read = function () {
                var self = this;
                $.getJSON(self._sourcePath).fail(function (response) {
                    throw new Error(response.status + ' ' + response.statusText);
                }).done(function (data) {
                    return self._handler.Store(data);
                });
            };
            return Repository;
        })();
        Model.Repository = Repository;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Repository.js.map
