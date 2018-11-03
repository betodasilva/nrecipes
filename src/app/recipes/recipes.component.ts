import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Server } from '../../providers/server.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @ViewChild('formElement') formElement: ElementRef;
  @ViewChild('titleElement') titleElement: ElementRef;
  @ViewChild('desclement') descElement: ElementRef;
  constructor(private server: Server) { }

  ngOnInit() {
  }

  submitNewRecipeData( event, title, description ){
    event.preventDefault();
    this.addNewRecipe( title, description );
    
  }

  addNewRecipe( title, description ){
    this.server
        .createRecipe( new Recipe(title, description) )
        .subscribe(
          res => console.log( res ),
          err => console.log( err ),
          () => console.log( 'done' )
        );
  }

  

}
