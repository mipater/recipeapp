import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
    new Recipe('New Recipe',
      'Wonderful',
      'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg',
      [new Ingredient('buns', 2), new Ingredient('meat', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
