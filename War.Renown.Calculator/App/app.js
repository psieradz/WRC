require([
    '../Lib/jquery-1.9.1.js', 
    '../Model/Category.js', 
    '../Model/IHaveValue.js', 
    '../Model/ILevel.js', 
    '../Model/Level.js', 
    '../Model/Trait.js', 
    '../Model/ValueLevel.js', 
    '../Model/Repository.js', 
    '../Common/IHandleGetJson.js', 
    '../Common/SimpleJsonRetriever.js', 
    '../Common/Exceptions/Exception.ts', 
    '../Common/Exceptions/JsonRetrievalException.ts'
], function () {
    var repository = new Wrc.Model.Repository('../DataSources/Local.json', new Wrc.Common.SimpleJsonRetriever());
    var el = document.getElementById('content');
    el.innerText = repository.Get();
});
//@ sourceMappingURL=app.js.map
