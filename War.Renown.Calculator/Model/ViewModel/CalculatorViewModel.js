var Wrc;
(function (Wrc) {
    (function (Model) {
        (function (ViewModel) {
            var CalculatorViewModel = (function () {
                function CalculatorViewModel(repository) {
                    this._repository = repository;
                    var array = ko.utils.arrayMap(this._repository.Categories, function (item) {
                        return new Category(item.Name);
                    });
                    this.Categories = ko.observableArray(array);
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
