import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CategoryComponent } from './category/category.component';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';
import { EditFlashcardComponent } from './edit-flashcard/edit-flashcard.component';

const routes: Routes = [
  { path: '', redirectTo: '/flashcard', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'flashcard/:id', component: FlashcardComponent },
  { path: 'flashcard', component: FlashcardComponent },
  { path: 'edit-flashcard/:id', component: EditFlashcardComponent },
  { path: 'createflashcard/:id', component: CreatefalshcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
