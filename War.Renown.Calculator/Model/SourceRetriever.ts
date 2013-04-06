/// <reference path="..\Common\IHandleGetJson.ts" />
/// <reference path="..\Api\jquery.d.ts" />

import Common = Wrc.Common;

module Wrc.Model
{
    export class SourceRetriever
    {
        private jsonHandler: Common.IHandleGetJson;

        constructor(public jsonSource: string, jsonHandler: Common.IHandleGetJson) {
            this.jsonSource = jsonSource;
            this.jsonHandler = jsonHandler;
        }

        RetrieveSource(): bool {
            var result = true;

            $.getJSON(
                this.jsonSource,
                (data) =>
                {
                    this.jsonHandler.Save(data);
                })
                .fail(result = false)

            return result;
        }

        DoIt() {
            var source = JSON.parse(this.jsonHandler.RetrieveAsString());

        }
    }
}