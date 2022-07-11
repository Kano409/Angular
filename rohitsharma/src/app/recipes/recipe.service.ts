import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Khaman Dhokla',
      'This dish popular at gujarat',
      'https://5.imimg.com/data5/AV/QJ/MY-19368834/vati-dal-khaman-500x500.jpg',
      [new Ingredient('chana loat', 1), new Ingredient('dhaniya', 20)]
    ),
    new Recipe(
      'Vada Pau',
      'This dish popular at maharastra',
      'https://farm8.staticflickr.com/7315/16386081065_62e3db594c_b.jpg',
      [new Ingredient('mirchi', 2), new Ingredient('ketchup', 1)]
    ),
  ];

  public get Recipes() {
    return this.recipes.slice(); // return a copy
  }
}
