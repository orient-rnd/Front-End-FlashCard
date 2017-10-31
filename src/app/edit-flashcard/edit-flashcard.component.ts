import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';
import { Location } from '@angular/common';

export class updateFlashCard{
  id: string;
  faceA: string;
  faceB: string;
  flashCardCategoryId: string;
  flashCardCategoryName: string;
  userEmail: string;
  displayOrder: number;
  viewNumber: number;
}

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: './edit-flashcard.component.html',
  styleUrls: ['./edit-flashcard.component.scss']
})
export class EditFlashcardComponent implements OnInit {
  
  data = new updateFlashCard();

  currentURL = "http://osdintern2.azurewebsites.net/Flashcards/";

  constructor(private router:Router, private flashcardservice:FlashcardService, private location:Location) {
  }

  ngOnInit() {
    this.data.id=this.router.url.split('/')[2];

    this.flashcardservice.interactDB(Method.GET, this.currentURL, this.data.id).subscribe(res => {
      this.data = res;
      // this.data.faceA = res.faceA;
      // this.data.faceB = res.faceB;
      // console.log(res);
    }); 
  }

  onClick(){
    this.flashcardservice.interactDB(Method.PUT, this.currentURL + this.data.id, this.data)
    .subscribe(res => this.location.back());
    // console.log(this.data);
  }

}
