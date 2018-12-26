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
    console.log( form.value );
    const { title, description } = form.value;
    const ingredients = this.extractIngredients( form.value );
    const steps = this.extractSteps( form.value );

    this.addNewRecipe(
      new Recipe(
        title,
        description,
        steps,
        ingredients
      )
    )
    
  }

  extractIngredients( data ){ 
    const ingredients: Ingredient[] = [];
    Object.keys( data ).forEach( (key, index) => {
      if ( key.indexOf('ingredient') > -1 )
        ingredients.push( data[key] );
    });
    
    return ingredients;
  }

  extractSteps( data ){ 
    const steps: Step[] = [];
    Object.keys( data ).forEach( (key, index) => {
      if ( key.indexOf('step') > -1 )
        steps.push( data[key] );
    });
    
    return steps;
  }

  addNewIngredient(){
    this.ingredients.push( new Ingredient('', 0, 'g') );
  }

  addNewStep(){
    this.steps.push( new Step('', '') );
  }

  addNewRecipe( recipe: Recipe ){
    this.server
        .createRecipe( recipe )
        .subscribe(
          res => console.log( res ),
          err => console.log( err ),
          () => console.log( 'done' )
        );
  }

}
