import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { FlashcardService } from './flashcard.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
