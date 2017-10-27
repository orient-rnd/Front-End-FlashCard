import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { MatMenuModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';
import { HttpClientModule } from '@angular/common/http';

import { FlashcardService } from './flashcard.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent,
    CreatefalshcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
