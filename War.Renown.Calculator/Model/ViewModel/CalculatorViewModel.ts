/// <reference path="../../Api/knockout.d.ts" />
/// <reference path="../../Model/Repository.ts" />
/// <reference path="../../Model/Category.ts" />
declare var ko;

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
            var array = ko.utils.arrayMap(
                    this._repository.Categories,
                    (item) => new Category(item.Name));
            this.Categories = ko.observableArray(array);
            //this.Categories.push(this._repository.Categories());
                //;
        }
                           
    }
}   