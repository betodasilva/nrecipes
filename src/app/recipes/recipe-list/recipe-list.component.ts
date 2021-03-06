import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Step } from '../recipe/step.model';
import { Ingredient } from '../recipe/ingredient.model';
import { Server } from '../../../providers/server.service';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  steps: Step[] = [new Step('Misturar a carne', 'Lorem ipsum dot color')];
  ingredients: Ingredient[] = [new Ingredient('Cominho', 1)];
  recipes: Recipe[] = [];
  recipe: Recipe;
  constructor(private server: Server) {}

  ngOnInit() {
    this.server.getRecipes()
      .pipe( 
        map( (res: Response) => res.json() ) 
      )
      .subscribe( 
        data => {
          for ( var [k, v] of Object.entries( data ) ) {
            this.recipes.push( new Recipe( v['title'], v['description'], this.steps, this.ingredients ) );
          }
        } );
  }

}
