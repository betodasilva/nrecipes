import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitrecipeComponent } from './submitrecipe/submitrecipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'enviar-receita', component: SubmitrecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
