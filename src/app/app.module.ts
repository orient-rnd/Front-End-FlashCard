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
import { CreateCategoryComponent } from './create-category/create-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashcardService } from './flashcard.service';
import { HttpModule } from '@angular/http';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategoryComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
