import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../app/recipes/recipe/recipe.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';


@Injectable()
export class Server {
    url: string = 'https://nrecipes-18e6c.firebaseio.com/recipes.json';
    constructor(private http: Http) {}

    createRecipe(recipe: Recipe){
        return this.http.post(this.url, recipe);
    }

    getRecipe(slug: string){
        return this.getRecipes().pipe(
            map( (res: Response) => res.json() ) 
        ).pipe(
            map( (recipes):Recipe => {
                let recipesArray: Recipe[] = Object.values(recipes);
                return recipesArray.find( (recipe: Recipe) => recipe.slug === slug)
            } )
        )
    }

    getRecipes(){
        return this.http.get(this.url);
    }
}