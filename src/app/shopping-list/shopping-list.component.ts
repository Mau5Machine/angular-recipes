import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('chicken breast', 2),
    new Ingredient('breadcrumbs', 2),
    new Ingredient('oil', 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing)
  }
}
