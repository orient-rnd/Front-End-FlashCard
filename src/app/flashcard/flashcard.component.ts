import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

  faceA: string = "thu";
  faceB: string = "anh thu";

  constructor() { }

  ngOnInit() {
  }

}
