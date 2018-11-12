import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Server } from '../../providers/server.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  
  constructor(private server: Server) { }

  ngOnInit() {
  }


  

}
