var Wrc;
(function (Wrc) {
    (function (Common) {
        var SimpleJsonRetriever = (function () {
            function SimpleJsonRetriever() {
                this._randomNumber = 4007005;
                this.Data = null;
            }
            SimpleJsonRetriever.prototype.Store = function (data) {
                var self = this;
                window.localStorage.setItem(this._randomNumber.toString(), JSON.stringify(data));
                self.Data = localStorage.getItem(this._randomNumber.toString());
            };
            return SimpleJsonRetriever;
        })();
        Common.SimpleJsonRetriever = SimpleJsonRetriever;        
    })(Wrc.Common || (Wrc.Common = {}));
    var Common = Wrc.Common;
})(Wrc || (Wrc = {}));
//@ sourceMappingURL=SimpleJsonRetriever.js.map
