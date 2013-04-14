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
                    self.Spent = ko.observable(0);
                    self.Limit = ko.observable(100);
                }
                CalculatorViewModel.prototype.LevelsSummary = function () {
                    var _this = this;
                    return ko.computed(function () {
                        return "Points spent: " + _this.Spent().toString() + "/" + _this.Limit().toString();
                    });
                };
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
                            return level.Trait == traitName && level.Selected == !check;
                        });
                        if(updatable.Count() > 0) {
                            var toUpdate = check ? updatable.First() : updatable.Last();
                            var sign = check ? 1 : -1;
                            if(sign * (self.Spent() + parseInt(toUpdate.Cost)) <= self.Limit()) {
                                self.Spent(self.Spent() + (sign * parseInt(toUpdate.Cost)));
                                self.Levels.replace(toUpdate, new Wrc.Model.ValueLevel(toUpdate.Description, toUpdate.Cost, toUpdate.Trait, toUpdate.Value, check));
                            }
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
