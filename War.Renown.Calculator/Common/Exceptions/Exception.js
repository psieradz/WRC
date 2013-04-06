var Wrc;
(function (Wrc) {
    (function (Common) {
        (function (Exceptions) {
            var Exception = (function () {
                function Exception(message) {
                    this.name = "Exception";
                    this.message = message;
                }
                return Exception;
            })();
            Exceptions.Exception = Exception;            
        })(Common.Exceptions || (Common.Exceptions = {}));
        var Exceptions = Common.Exceptions;
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=Exception.js.map
