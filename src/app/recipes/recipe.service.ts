import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg'),
    new Recipe('New Recipe', 'Wonderful', 'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
