import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';


@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

  faceA: string = "thu";
  faceB: string = "anh thu";
  flashCards: any[];
  public id: string = "";
  
  constructor(private router: Router,
    private flashCardService: FlashcardService, 
      
  ) { }

  ngOnInit() {
   this.flashCardService.interactDB(Method.GET,
     "http://osdintern2.azurewebsites.net/Flashcards", 
     '')
     .subscribe(res =>{
      //  this.faceA = res.faceA;
      //  this.faceB = res.faceB;
      this.flashCards = res;
     });
  }





}
