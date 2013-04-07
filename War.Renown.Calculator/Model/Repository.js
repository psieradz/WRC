/// <reference path="..\Api\jquery.d.ts" />
/// <reference path="..\Api\linq.d.ts" />
/// <reference path="..\Common\IHandleGetJson.ts" />
/// <reference path="..\Common\Exceptions\Exception.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Model\ValueLevel.ts" />
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
                    async: false,
                    cache: false
                });
                if(this._handler.Data == null) {
                    try  {
                        this.Read();
                    }finally {
                        $.ajaxSetup({
                            async: true,
                            cache: true
                        });
                    }
                }
                var query = Enumerable.From(JSON.parse(this._handler.Data)).Select(function (root) {
                    return root.Categories;
                }).ToArray();
            };
            Repository.prototype.Read = function () {
                var self = this;
                $.getJSON(self._sourcePath).fail(function (response) {
                    throw new Error(response.status + ' ' + response.statusText);
                    //throw new Common.Exceptions.JsonRetrievalException(response.statusText);
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
