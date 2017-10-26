import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'flashcard', component: FlashcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
