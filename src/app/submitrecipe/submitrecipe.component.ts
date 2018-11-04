import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../../providers/server.service';
import { Recipe } from '../recipes/recipe/recipe.model';

@Component({
  selector: 'app-submitrecipe',
  templateUrl: './submitrecipe.component.html',
  styleUrls: ['./submitrecipe.component.scss']
})
export class SubmitrecipeComponent implements OnInit {

  @ViewChild('formElement') formElement: ElementRef;
  @ViewChild('titleElement') titleElement: ElementRef;
  @ViewChild('desclement') descElement: ElementRef;
  constructor(private server: Server) {}

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
