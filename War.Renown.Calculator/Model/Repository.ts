/// <reference path="..\Api\jquery.d.ts" />
/// <reference path="..\Api\linq.d.ts" />
/// <reference path="..\Common\Exceptions\Exception.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Common\Exceptions\JsonRetrievalException.ts" />
/// <reference path="..\Model\ValueLevel.ts" />
/// <reference path="..\Model\Category.ts" />

module Wrc.Model
{
    export class Repository
    {
        private _connectionString: any;
        private _categories: Category[];
        private _traits: Trait[];
        private _levels: ILevel[];

        get Categories() : Category[]
        {
            return this._categories;
        }

        get Traits(): Trait[]
        {
            return this._traits;
        }

        get Levels(): ILevel[]
        {
            return this._levels;
        }

        constructor(connectionString: string)
        {
            this.Initialize(connectionString);
        }

        private Initialize(connectionString: string)
        {
            this._connectionString = connectionString;
            this._categories = new Category[];
            this._traits = new Trait[];
            this._levels = new ILevel[];
        }
        
        Fill() 
        {
            var self = this;

            try
                {
                    jQuery.ajaxSetup({ async: false, cache: false })
                    jQuery.getJSON(self._connectionString)
                    .fail((response) =>
                    {
                        throw new Common.Exceptions.JsonRetrievalException(response.statusText);
                    })
                    .done((data) =>
                    {                       
                        Enumerable
                            .From(data)
                            .ForEach(category =>
                            {
                                self._categories.push(category);
                                Enumerable
                                    .From(category.Traits)
                                    .ForEach(trait =>
                                    {
                                        trait.Category = category.Name
                                        self._traits.push(trait);
                                        Enumerable
                                        .From(trait.Levels)
                                        .ForEach(level =>
                                        {                                            
                                            self._levels.push(new ValueLevel(level.Description, level.Cost, trait.Name, level.Value,level.Selected));
                                        })
                                    })
                            })
                    })

                }
                finally
                {
                    jQuery.ajaxSetup({ async: true, cache: true })
                }
        }
     }
}