import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  idCategory:string = "c174dcb13ee04fb8966eb640abb8e972";
  constructor() { }

  ngOnInit() {
  }
}
