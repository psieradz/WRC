var Wrc;
(function (Wrc) {
    /// <reference path="..\Api\jquery.d.ts" />
    /// <reference path="..\Api\linq.d.ts" />
    /// <reference path="..\Common\Exceptions\Exception.ts" />
    /// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
    /// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
    /// <reference path="..\Model\ValueLevel.ts" />
    /// <reference path="..\Model\Category.ts" />
    (function (Model) {
        var Repository = (function () {
            function Repository(connectionString) {
                this.Initialize(connectionString);
            }
            Object.defineProperty(Repository.prototype, "Categories", {
                get: function () {
                    return this._categories;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Repository.prototype, "Traits", {
                get: function () {
                    return this._traits;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Repository.prototype, "Levels", {
                get: function () {
                    return this._levels;
                },
                enumerable: true,
                configurable: true
            });
            Repository.prototype.Initialize = function (connectionString) {
                this._connectionString = connectionString;
                this._categories = new Array();
                this._traits = new Array();
                this._levels = new Array();
            };
            Repository.prototype.Fill = function () {
                var self = this;
                try  {
                    jQuery.ajaxSetup({
                        async: false,
                        cache: false
                    });
                    jQuery.getJSON(self._connectionString).fail(function (response) {
                        throw new Wrc.Common.Exceptions.JsonRetrievalException(response.statusText);
                    }).done(function (data) {
                        Enumerable.From(data).ForEach(function (category) {
                            self._categories.push(category);
                            Enumerable.From(category.Traits).ForEach(function (trait) {
                                self._traits.push(trait);
                                Enumerable.From(trait.Levels).ForEach(function (level) {
                                    self._levels.push(new Model.ValueLevel(level.Description, level.Cost, trait.Name, level.Value));
                                });
                            });
                        });
                    });
                }finally {
                    jQuery.ajaxSetup({
                        async: true,
                        cache: true
                    });
                }
            };
            return Repository;
        })();
        Model.Repository = Repository;        
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Repository.js.map
