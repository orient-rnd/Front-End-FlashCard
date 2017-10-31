import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashcardService } from './flashcard.service';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {MatButtonToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { EditFlashcardComponent } from './edit-flashcard/edit-flashcard.component';
import { HttpModule } from '@angular/http';
import { PlayflashcardComponent } from './playflashcard/playflashcard.component';

import {
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule,
  MatSliderModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategoryComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent,
    EditCategoryComponent,
    CreatefalshcardComponent,
    EditFlashcardComponent,
    PlayflashcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
