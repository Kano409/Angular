import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Khaman Dhokla',
      'This dish popular at gujarat',
      'https://images.aws.nestle.recipes/original/69111af01e9114ea805c5fa4821c6a70_Khaman_Dhokla_Plating.jpg',
      [new Ingredient('chana loat', 1), new Ingredient('dhaniya', 20)]
    ),
    new Recipe(
      'Vada Pau',
      'This dish popular at maharastra',
      'https://imagevars.gulfnews.com/2022/05/14/Vada-Pav_180bf15c40b_original-ratio.jpg',
      [new Ingredient('mirchi', 2), new Ingredient('ketchup', 1)]
    ),
  ];

  public get Recipes() {
    return this.recipes.slice(); // return a copy
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }
}
