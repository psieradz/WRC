/// <reference path="../../Api/knockout.d.ts" />
/// <reference path="../../Model/Repository.ts" />
/// <reference path="../../Model/Category.ts" />
/// <reference path="../../Model/Trait.ts" />

module Wrc.Model.ViewModel
{
    export class CalculatorViewModel
    {
        private _repository: Repository;

        Categories: KnockoutObservableArray;
        Traits: KnockoutObservableArray;
        Levels: KnockoutObservableArray;

        constructor(repository: Repository)
        {
            this._repository = repository;

            this.Categories = ko.observableArray(
                ko.utils.arrayMap(
                    this._repository.Categories,
                    (item) => new Wrc.Model.Category(item.Name)));

        }
                           
    }
}   