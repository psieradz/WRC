/// <reference path="../Model/Repository.ts" />
/// <reference path="../Model/ViewModel/CalculatorViewModel.ts" />
export class AppMain
{
    public Run()
    {
        var repository = new Wrc.Model.Repository('../DataSources/Local.json');
        var el = document.getElementById('content');
        repository.Fill();
        var viewModel = new Wrc.Model.ViewModel.CalculatorViewModel(repository);
    }
    //el.innerText = repository.Get();
}