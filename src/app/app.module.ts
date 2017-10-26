import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';

>>>>>>> 7e299b687793290da017259f08eb930d6f93a869

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent
=======
    CategoryComponent,
    FlashcardComponent
>>>>>>> 7e299b687793290da017259f08eb930d6f93a869
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
