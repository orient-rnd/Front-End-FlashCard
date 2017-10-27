import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  idCategory = '728127f89f88491ebedbe1a2187e718b';
  constructor() { }

  ngOnInit() {
  }
}
