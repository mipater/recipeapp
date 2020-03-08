import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static: false}) ingredientNameEl: ElementRef;
  @ViewChild('amountInput', {static: false}) ingredientAmountEl: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    this.slService.addIngredient(new Ingredient (
      this.ingredientNameEl.nativeElement.value,
      this.ingredientAmountEl.nativeElement.value)
    );
  }
}
