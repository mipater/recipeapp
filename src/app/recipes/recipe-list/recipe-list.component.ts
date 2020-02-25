import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg'),
    new Recipe('New Recipe', 'Wonderful', 'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/139792698/original/84e4d14cca24be112294cac732e25b63125c67b4.jpeg')
  ];
  @Output() onRecipeSelect2 = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.onRecipeSelect2.emit(recipe);
  }
}
