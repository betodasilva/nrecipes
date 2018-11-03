import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Server } from '../providers/server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ Server ],
  bootstrap: [AppComponent]
})
export class AppModule { }

