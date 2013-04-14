var Wrc;
(function (Wrc) {
    (function (Model) {
        (function (ViewModel) {
            var CalculatorViewModel = (function () {
                function CalculatorViewModel(repository) {
                    var self = this;
                    this._repository = repository;
                    this.Categories = ko.observableArray(ko.utils.arrayMap(this._repository.Categories, function (item) {
                        return new Wrc.Model.Category(item.Name);
                    }));
                    this.Traits = ko.observableArray(ko.utils.arrayMap(this._repository.Traits, function (item) {
                        return new Wrc.Model.Trait(item.Category, item.Name);
                    }));
                    this.Levels = ko.observableArray(ko.utils.arrayMap(this._repository.Levels, function (item) {
                        return new Wrc.Model.ValueLevel(item.Description, item.Cost, item.Trait, item.Value);
                    }));
                }
                CalculatorViewModel.prototype.GetTraitsInCategory = function (categoryName) {
                    var self = this;
                    self._traitsInCategory = ko.computed({
                        read: function () {
                            return Enumerable.From(self.Traits()).Where(function (trait) {
                                return trait.Category == categoryName;
                            }).ToArray();
                        }
                    });
                    return self._traitsInCategory;
                };
                CalculatorViewModel.prototype.GetLevelsInTrait = function (traitName) {
                    var self = this;
                    self._LevelsInTrait = ko.computed({
                        read: function () {
                            return Enumerable.From(self.Levels()).Where(function (level) {
                                return level.Trait == traitName;
                            }).ToArray().sort(function (a, b) {
                                return b - a;
                            });
                        }
                    });
                    return self._LevelsInTrait;
                };
                CalculatorViewModel.prototype.SelectLevel = function (traitName) {
                    var self = this;
                    return function () {
                        ko.utils.arrayForEach(self.Levels(), function (item) {
                            return item.Selected = ko.observable(item.Selected);
                        });
                        var r = ko.utils.arrayFirst(self.Levels(), function (level) {
                            return !level.Selected;
                        });
                        r.Selected = true;
                    };
                };
                return CalculatorViewModel;
            })();
            ViewModel.CalculatorViewModel = CalculatorViewModel;            
        })(Model.ViewModel || (Model.ViewModel = {}));
        var ViewModel = Model.ViewModel;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=CalculatorViewModel.js.map
