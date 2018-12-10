import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe/recipe.model';
@Component({
  selector: 'app-recipeview',
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.scss']
})
export class RecipeviewComponent implements OnInit {

  recipe: Recipe;
  constructor(public route: ActivatedRoute) {
    route.data.subscribe( ({recipe}) => this.recipe = recipe );
  }

  ngOnInit() {
    console.log( this.recipe );
  }

}
