import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

  public id: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.id = this.router.url.split('/')[2];
  }





}
