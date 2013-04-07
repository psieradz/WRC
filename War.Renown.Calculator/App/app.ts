/// <reference path="../Api/require.d.ts" />
/// <reference path="../Model/ValueLevel.ts" />
/// <reference path="../Model/Repository.ts" />

require
(
    //#region Imports
    [
        '../Lib/jquery-1.9.1.js'
      , '../Lib/linq.js'
      , '../Lib/linq.jquery.js'
      , '../Common/CollectionBase.js'
      , '../Model/Collections/ILoadFromRepository.js'
      , '../Model/Collections/CategoryCollection.js'
      , '../Model/Collections/TraitCollection.js'
      , '../Model/Collections/ILevelCollection.js'
      , '../Model/Category.js'
      , '../Model/IHaveValue.js'
      , '../Model/ILevel.js'
      , '../Model/Level.js'
      , '../Model/Trait.js'
      , '../Model/ValueLevel.js'
      , '../Model/Repository.js'
      , '../Common/Exceptions/Exception.ts'
      , '../Common/Exceptions/JsonRetrievalException.ts'
    ],
    //#endregion
    () =>
    {
        var repository = new Wrc.Model.Repository('../DataSources/Local.json');
        var el = document.getElementById('content');
        repository.Fill();
        //el.innerText = repository.Get();
    }
);