import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CategoryComponent } from './category/category.component';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'flashcard', component: FlashcardComponent },
  { path: 'createflashcard', component: CreatefalshcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
