import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static: false}) ingredientNameEl: ElementRef;
  @ViewChild('amountInput', {static: false}) ingredientAmountEl: ElementRef;
  @Output() onIngredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.onIngredientAdd.emit(new Ingredient (
      this.ingredientNameEl.nativeElement.value,
      this.ingredientAmountEl.nativeElement.value)
    );
  }
}
