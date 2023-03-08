
// Author: Megyeri Márk Máté
// Copyright: 2023, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2023-03-08
// Github: https://github.com/megyerimark/
// Licenc: GNU GPL


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmplComponent } from './empl/empl.component';

const routes: Routes = [

  {path:'empl', component:EmplComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
