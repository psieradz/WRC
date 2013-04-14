/// <reference path="../../Api/knockout.d.ts" />
/// <reference path="../../Model/Repository.ts" />
/// <reference path="../../Model/Category.ts" />
/// <reference path="../../Model/Trait.ts" />

module Wrc.Model.ViewModel
{
    export class CalculatorViewModel
    {
        private _repository: Repository;
        private _traitsInCategory: KnockoutComputed;
        private _LevelsInTrait: KnockoutComputed;
        
        Categories: KnockoutObservableArray;
        Traits: KnockoutObservableArray;
        Levels: KnockoutObservableArray;
        
        constructor(repository: Repository)
        {
            var self = this;

            this._repository = repository;

            this.Categories = ko.observableArray(
                ko.utils.arrayMap(
                    this._repository.Categories,
                    (item) => new Wrc.Model.Category(item.Name)));

            this.Traits = ko.observableArray(
                 ko.utils.arrayMap(
                    this._repository.Traits,
                    (item) => new Wrc.Model.Trait(item.Category, item.Name)));

            this.Levels = ko.observableArray(
                 ko.utils.arrayMap(
                    this._repository.Levels,
                    (item) => new Wrc.Model.ValueLevel(item.Description, item.Cost, item.Trait, item.Value)));
         }
        
        GetTraitsInCategory(categoryName: string): KnockoutComputed
        {
            var self = this;

            self._traitsInCategory =
                 ko.computed(
                        {
                            read:
                            () =>
                            {
                                return Enumerable
                                    .From(self.Traits())
                                    .Where((trait) => trait.Category == categoryName)
                                    .ToArray();
                            }
                        });

            return self._traitsInCategory;
        }

        GetLevelsInTrait(traitName: string): KnockoutComputed
        {
            var self = this;

            self._LevelsInTrait =
                ko.computed(
                {
                    read:
                       () =>
                       {
                           return Enumerable
                             .From(self.Levels())
                             .Where((level) => level.Trait == traitName)
                             .ToArray()
                             .sort((a, b) => b - a);
                       }
                });

            return self._LevelsInTrait;
        }

        SelectLevel(traitName: string)
        {
            var self = this;

            return () =>
            {
                ko.utils.arrayForEach(self.Levels(),
                    item => item.Selected = ko.observable(item.Selected));
                var r =
                    ko.utils.arrayFirst(
                        self.Levels(),
                        level => !level.Selected);
                r.Selected = true;
            }
        }
                           
    }
}   