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
        Limit: KnockoutObservableNumber;
        Spent: KnockoutObservableNumber;
        
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
                    item => new Wrc.Model.Category(item.Name)));

            this.Traits = ko.observableArray(
                 ko.utils.arrayMap(
                    this._repository.Traits,
                    item => new Wrc.Model.Trait(item.Category, item.Name)));

            this.Levels = ko.observableArray(
                 ko.utils.arrayMap(
                    this._repository.Levels,
                    item => new Wrc.Model.ValueLevel(item.Description, item.Cost, item.Trait, item.Value, false)));

            self.Spent = ko.observable(0);
            self.Limit = ko.observable(100);
        }

        LevelsSummary(): KnockoutComputed
        {
            return ko.computed(() => "Points spent: " + this.Spent().toString() + "/" + this.Limit().toString());
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
                             .Where((level) =>  level.Trait == traitName )
                             .ToArray()
                             .sort((a, b) => b - a);
                       }
                });

            return self._LevelsInTrait;
        }

        ChangeLevelState(traitName: string, check: bool)
        {
            var self = this;

            return () =>
            {
                var updatable =
                    Enumerable
                        .From(self.Levels())
                        .Where(level => level.Trait == traitName && level.Selected == !check );
                        
                if (updatable.Count() > 0)
                {
                    var toUpdate = check ? updatable.First() : updatable.Last();
                    var sign = check ? 1 : -1;

                    if (sign * (self.Spent() + parseInt(toUpdate.Cost)) <= self.Limit()) 
                    {                        
                        self.Spent(self.Spent() + (sign * parseInt(toUpdate.Cost)));
                        self.Levels.replace(
                            toUpdate,
                            new Wrc.Model.ValueLevel(toUpdate.Description, toUpdate.Cost, toUpdate.Trait, toUpdate.Value, check));
                    }                   

                }
            }
        }
                           
    }
}   