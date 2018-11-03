import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../app/recipes/recipe/recipe.model';

@Injectable()
export class Server {
    url: string = 'https://nrecipes-18e6c.firebaseio.com/recipes.json';
    constructor(private http: Http) {}

    createRecipe(recipe: Recipe){
        return this.http.post(this.url, recipe);
    }

    getRecipes(){
        return this.http.get(this.url);
    }
}