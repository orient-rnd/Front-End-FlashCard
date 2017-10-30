import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

import { HttpClientModule } from '@angular/common/http';
import { FlashcardService } from './flashcard.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PlayflashcardComponent } from './playflashcard/playflashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule,
  MatSliderModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent,
    PlayflashcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   private matIconRegistry: MatIconRegistry,
  //   private domSanitizer: DomSanitizer) {
  //     matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustUrl('/src/assets/mdi.svg'));
  // }
}
