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
                        return new Wrc.Model.ValueLevel(item.Description, item.Cost, item.Trait, item.Value, false);
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
                CalculatorViewModel.prototype.ChangeLevelState = function (traitName, check) {
                    var self = this;
                    return function () {
                        var updatable = Enumerable.From(self.Levels()).Where(function (level) {
                            return level.Selected == !check;
                        });
                        if(updatable.Count() > 0) {
                            var toUpdate = check ? updatable.First() : updatable.Last();
                            self.Levels.replace(toUpdate, new Wrc.Model.ValueLevel(toUpdate.Description, toUpdate.Cost, toUpdate.Trait, toUpdate.Value, check));
                        }
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
