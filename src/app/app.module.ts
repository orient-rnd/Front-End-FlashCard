import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CreatefalshcardComponent } from './createfalshcard/createfalshcard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashcardService } from './flashcard.service';
import { HttpModule } from '@angular/http';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {MatButtonToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategoryComponent,
    FooterComponent,
    CategoryComponent,
    FlashcardComponent,
    EditCategoryComponent,
    CreatefalshcardComponent
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
    FormsModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
