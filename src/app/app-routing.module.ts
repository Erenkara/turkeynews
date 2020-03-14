
import { CategoryComponent } from './category/category.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'news',component: NewsComponent},
  {path:'category/:{{categoryName}}',component: CategoryComponent},
  {path:'', redirectTo:'news',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
