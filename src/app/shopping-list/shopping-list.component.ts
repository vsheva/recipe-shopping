import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shoppig-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSubscription: Subscription;


  constructor(private shoppingListService: ShoppingListService) {
  }

/*
  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
*/

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.igChangeSubscription= this.shoppingListService.ingredientChanged
      .subscribe((ingredients: Ingredient[]  )=>{
        this.ingredients= ingredients
      })
  }
 ngOnDestroy() {
  this.igChangeSubscription.unsubscribe();
 }
}
