import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';
import { Router } from '@angular/router';


class createFlashCard {
  faceA: string;
  faceB: string;
  flashCardCategoryId: string;
  flashCardCategoryName: string = "Hay lam";
  userEmail: any = 0;
  displayOrder: any = 0;
  viewNumber: any = 0;
}
@Component({
  selector: 'app-createfalshcard',
  templateUrl: './createfalshcard.component.html',
  styleUrls: ['./createfalshcard.component.scss']
})

export class CreatefalshcardComponent implements OnInit {
  data = new createFlashCard();

  currenturl = 'http://osdintern2.azurewebsites.net/Flashcards';
  constructor(private flashCardService: FlashcardService,
    private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    this.data.flashCardCategoryId = this.router.url.split('/')[2];
    let body = JSON.stringify(this.data);
    // console.log(body);
    this.flashCardService.interactDB(Method.POST, this.currenturl, body).subscribe(res => console.log(res));
  }

}
