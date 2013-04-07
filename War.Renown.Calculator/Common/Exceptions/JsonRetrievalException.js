var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wrc;
(function (Wrc) {
    (function (Common) {
        /// <reference path="Exception.ts" />
        (function (Exceptions) {
            var JsonRetrievalException = (function (_super) {
                __extends(JsonRetrievalException, _super);
                function JsonRetrievalException(message) {
                                _super.call(this, message);
                    this._name = "JsonRetrievalException";
                }
                Object.defineProperty(JsonRetrievalException.prototype, "Name", {
                    get: function () {
                        return this._name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(JsonRetrievalException.prototype, "Message", {
                    get: function () {
                        return this._message;
                    },
                    set: function (value) {
                        this._message = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return JsonRetrievalException;
            })(Exceptions.Exception);
            Exceptions.JsonRetrievalException = JsonRetrievalException;            
        })(Common.Exceptions || (Common.Exceptions = {}));
        var Exceptions = Common.Exceptions;
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=JsonRetrievalException.js.map
