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
                    $.ajaxSetup({
                        async: false,
                        cache: false
                    });
                    $.getJSON(self._connectionString).fail(function (response) {
                        throw new Wrc.Common.Exceptions.JsonRetrievalException(response.statusText);
                    }).done(function (data) {
                        Enumerable.From(data).ForEach(function (category) {
                            var categoryToAdd = new Model.Category(category.Name);
                            self._categories.push(categoryToAdd);
                            Enumerable.From(category.Traits).ForEach(function (trait) {
                                var traitToAdd = new Model.Trait(categoryToAdd, trait.Name);
                                self._traits.push(traitToAdd);
                                Enumerable.From(trait.Levels).ForEach(function (level) {
                                    self._levels.push(new Model.ValueLevel(level.Description, level.Cost, traitToAdd, level.Value));
                                });
                            });
                        });
                    });
                }finally {
                    $.ajaxSetup({
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
