import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

export class Category {
  id: string;
  name: string;
  userId: string;
  userEmail: string;
  isFaceAShowFirst: boolean;
  isRandom: boolean;
  displayOrder: number;
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  constructor(private flashcardService: FlashcardService) { }
  categories: Category[];
  urlAPI: string = "http://osdintern2.azurewebsites.net/FlashCardCategories";


  ngOnInit() {
    this.flashcardService.interactDB(Method.GET, this.urlAPI, '').subscribe(res => { this.categories = res });
  }

  onClose(categoryId: any) {
    this.flashcardService.interactDB(Method.DELETE, this.urlAPI, categoryId)
      .subscribe(res => this.categories = this.categories.filter(category => {
        return category.id !== categoryId;
      }));
  }
}
