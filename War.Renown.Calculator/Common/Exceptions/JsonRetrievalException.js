var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wrc;
(function (Wrc) {
    (function (Common) {
        (function (Exceptions) {
            var JsonRetrievalException = (function (_super) {
                __extends(JsonRetrievalException, _super);
                function JsonRetrievalException(message) {
                    _super.prototype.name = "JsonRetrievalException";
                                _super.call(this, message);
                }
                return JsonRetrievalException;
            })(Exceptions.Exception);
            Exceptions.JsonRetrievalException = JsonRetrievalException;            
        })(Common.Exceptions || (Common.Exceptions = {}));
        var Exceptions = Common.Exceptions;
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=JsonRetrievalException.js.map
