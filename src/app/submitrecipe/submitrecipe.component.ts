import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Server } from '../../providers/server.service';
import { Recipe } from '../recipes/recipe/recipe.model';
import { Ingredient } from '../recipes/recipe/ingredient.model'
import { Step } from '../recipes/recipe/step.model';

@Component({
  selector: 'app-submitrecipe',
  templateUrl: './submitrecipe.component.html',
  styleUrls: ['./submitrecipe.component.scss']
})
export class SubmitrecipeComponent implements OnInit {

  @ViewChild('f') ngForm: NgForm;
  ingredients: Ingredient[] = [new Ingredient('', 0)];
  steps: Step[] = [new Step('', '')];
  ingredientsLength: number;
  ingredientDefaultUnity = 'g';
  constructor(private server: Server) {
    this.ingredientsLength = this.ingredients.length;
  }

  ngOnInit() {
  }

  submitNewRecipeData( form ){
    console.log( form );
    //this.addNewRecipe( title, description );
    
  }

  addNewIngredient(){
    this.ingredients.push( new Ingredient('', 0, 'g') );
  }

  addNewStep(){
    this.steps.push( new Step('', '') );
  }

  /* addNewRecipe( title, description ){
    this.server
        .createRecipe( new Recipe(title, description) )
        .subscribe(
          res => console.log( res ),
          err => console.log( err ),
          () => console.log( 'done' )
        );
  } */

}
