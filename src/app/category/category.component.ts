import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  constructor(private flashcardService:FlashcardService) { }
  categories:any;
  urlAPI:string="http://osdintern2.azurewebsites.net/FlashCardCategories";

  ngOnInit() {
    this.flashcardService.interactDB(Method.GET,this.urlAPI,'').subscribe(res=>{this.categories=res});  
  }

  onClose(){
    alert("helllo! @Warning It's dangerous##")
  }
}
