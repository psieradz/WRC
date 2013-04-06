var Wrc;
(function (Wrc) {
    /// <reference path="IHandleGetJson.ts" />
    (function (Common) {
        var SimpleJsonRetriever = (function () {
            function SimpleJsonRetriever() {
                this._randomNumber = 4007005;
            }
            SimpleJsonRetriever.prototype.Save = function (data) {
                window.localStorage.setItem(this._randomNumber.toString(), JSON.stringify(data));
            };
            SimpleJsonRetriever.prototype.Retrieve = function () {
                return window.localStorage.getItem(this._randomNumber.toString());
            };
            SimpleJsonRetriever.prototype.RetrieveAsString = function () {
                return JSON.stringify(this.Retrieve());
            };
            return SimpleJsonRetriever;
        })();
        Common.SimpleJsonRetriever = SimpleJsonRetriever;        
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=SimpleJsonRetriever.js.map
