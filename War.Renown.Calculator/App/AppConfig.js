require.config({
    baseUrl: '../',
    paths: {
        'knockout': 'Lib/knockout-2.2.1.debug'
    },
    shim: {
        knockout: {
            exports: "ko"
        }
    }
});
require([
    '../App/AppMain', 
    'knockout', 
    '../Lib/jquery', 
    '../Lib/linq', 
    '../Lib/linq.jquery', 
    '../Common/Exceptions/Exception', 
    '../Common/Exceptions/JsonRetrievalException', 
    '../Model/Category', 
    '../Model/IHaveValue', 
    '../Model/ILevel', 
    '../Model/Level', 
    '../Model/Trait', 
    '../Model/ValueLevel', 
    '../Model/Repository', 
    '../Model/ViewModel/CalculatorViewModel'
], function (main, knockout) {
    if(window["ko"] == null) {
        window["ko"] = knockout;
    }
    var appMain = new main.AppMain();
    appMain.Run();
});
//@ sourceMappingURL=AppConfig.js.map
