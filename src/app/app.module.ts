import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Server } from '../providers/server.service';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SubmitrecipeComponent } from './submitrecipe/submitrecipe.component';
import { RecipeviewComponent } from './recipes/recipeview/recipeview.component';
import { RecipeViewResolverService } from 'src/providers/recipeviewresolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeComponent,
    FilterComponent,
    HomeComponent,
    HeaderComponent,
    SubmitrecipeComponent,
    RecipeviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ Server, RecipeViewResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

