/// <reference path="../Api/require.d.ts" />
/// <reference path="../Model/ValueLevel.ts" />
/// <reference path="../Model/Category.ts" />
/// <reference path="AppMain.ts" />
require.config({
    baseUrl: '../',
    paths: {
        'Knockout': 'Lib/knockout-2.2.1.debug',
        'AppMain': 'App/AppMain'
    }//,
    //shim: {
    //    knockout: {
    //        exports: "ko"
    //    }
    //}
});

require
(
    //#region Imports
    [
        'AppMain'
      , 'Knockout'
      , '../Lib/jquery'
      , '../Lib/linq'
      , '../Lib/linq.jquery'
      , '../Common/Exceptions/Exception'
      , '../Common/Exceptions/JsonRetrievalException'
      , '../Model/Category'
      , '../Model/IHaveValue'
      , '../Model/ILevel'
      , '../Model/Level'
      , '../Model/Trait'
      , '../Model/ValueLevel'
      , '../Model/Repository'
      , '../Model/ViewModel/CalculatorViewModel'
    ],
    //#endregion
    (main, knockout) =>
    {
        if (window["ko"] == null) window["ko"] = knockout;
        var appMain = new main.AppMain();
        appMain.Run();
    }
);