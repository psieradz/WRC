var Wrc;
(function (Wrc) {
    (function (Model) {
        (function (ViewModel) {
            var CalculatorViewModel = (function () {
                function CalculatorViewModel(repository) {
                    this._repository = repository;
                    this.Categories = ko.observableArray(ko.utils.arrayMap(this._repository.Categories, function (item) {
                        return new Wrc.Model.Category(item.Name);
                    }));
                    this.Traits = ko.observableArray(ko.utils.arrayMap(this._repository.Traits, function (item) {
                        return new Wrc.Model.Trait();
                    }));
                }
                return CalculatorViewModel;
            })();
            ViewModel.CalculatorViewModel = CalculatorViewModel;            
        })(Model.ViewModel || (Model.ViewModel = {}));
        var ViewModel = Model.ViewModel;
    })(Wrc.Model || (Wrc.Model = {}));
    var Model = Wrc.Model;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=CalculatorViewModel.js.map
