import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitrecipeComponent } from './submitrecipe/submitrecipe.component';
import { RecipeviewComponent } from './recipes/recipeview/recipeview.component';
import { RecipeViewResolverService } from 'src/providers/recipeviewresolver.service';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    data: { depth: 1 }
  },
  {
    
      path: 'receita/:slug', component: RecipeviewComponent,
      resolve: {
        recipe: RecipeViewResolverService
      }
    
   
  },
  { path: 'enviar-receita', component: SubmitrecipeComponent, data: { depth: 2 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
