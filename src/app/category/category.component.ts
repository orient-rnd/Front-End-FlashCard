import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  newFlashCard = {
    faceA: 'test service',
    faceB: 'result true',
    flashCardCategoryId: 'string',
    flashCardCategoryName: 'string',
    userEmail: 'string',
    displayOrder: 0,
    viewNumber: 0
  };
  constructor(private flashCardService: FlashcardService) { }

  ngOnInit() {
  }

}
