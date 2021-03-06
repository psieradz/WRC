define(["require", "exports"], function(require, exports) {
    var AppMain = (function () {
        function AppMain() { }
        AppMain.prototype.Run = function () {
            var repository = new Wrc.Model.Repository('../DataSources/Local.json');
            repository.Fill();
            var viewModel = new Wrc.Model.ViewModel.CalculatorViewModel(repository);
            ko.applyBindings(viewModel);
        };
        return AppMain;
    })();
    exports.AppMain = AppMain;    
})
//@ sourceMappingURL=AppMain.js.map
