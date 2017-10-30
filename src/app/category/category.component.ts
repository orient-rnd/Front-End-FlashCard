import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;
  urlAPI = 'http://osdintern2.azurewebsites.net/FlashCardCategories';

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.flashcardService.interactDB(Method.GET, this.urlAPI, '').subscribe(res => { this.categories = res; });
  }

}
