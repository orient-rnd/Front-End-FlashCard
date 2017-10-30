import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Method } from './../method.enum';
import { HttpClient } from '@angular/common/http';

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


  constructor(private flashcardService: FlashcardService,private http: HttpClient) { }
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
  public getCategoryDetail
  onEdit(name: string, check: string,categoryId: any) {
    const body = {
      "name": name,
      "userId": "string",
      "userEmail": "string",
      "isFaceAShowFirst": check,
      "isRandom": true
    };

    this.http.put('http://osdintern2.azurewebsites.net/FlashCardCategories/'+categoryId, body)
      .subscribe(res => { console.log(res) },
      );
  }

}
