import { Injectable }               from '@angular/core';
import { Recipe }                   from '../app/recipes/recipe/recipe.model';
import { Server }                   from './server.service';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
  }                                 from '@angular/router';
  import { Observable, of, EMPTY }  from 'rxjs';
  import { mergeMap, take }         from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RecipeViewResolverService implements Resolve<Recipe>{
    
    constructor(private server: Server, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Recipe> | Observable<never> {
            let slug = route.paramMap.get('slug');
            return this.server.getRecipe(slug).pipe(
                take(1),
                mergeMap( recipe => {
                    if ( recipe ) {
                        return of(recipe)
                    }
                    else {
                        this.router.navigate(['']);
                        return EMPTY;
                    }
                })
            )
        }
}