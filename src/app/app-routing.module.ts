import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CategoryComponent } from './category/category.component';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {EditCategoryComponent}from'./edit-category/edit-category.component'

const routes: Routes = [
  { path: '', redirectTo: '/flashcard', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'flashcard/:id', component: FlashcardComponent },
  { path: 'flashcard', component: FlashcardComponent },
  { path: 'createflashcard/:id', component: CreatefalshcardComponent },
  { 
    path: 'creater-category',
    component: CreateCategoryComponent
  },
  { 
    path: 'edit-category',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
