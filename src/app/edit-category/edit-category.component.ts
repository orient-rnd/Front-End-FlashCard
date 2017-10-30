import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Category {
  id: string;
  isFaceAShowFirst: boolean;
  isRandom: boolean;
  name: string;
  userEmail: string;
  userId: string;
}
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  forgot = false;
  selectedValue: string;
  result: Category;
  name;
  face:boolean;
  faces = [
    { value: true, viewValue: 'Face A is choosen.' },
    { value: false, viewValue: 'Face B is choosen.' }
  ];
  constructor(private http: HttpClient) { }
  toggleForgot() {
    this.forgot = !this.forgot;
  }
  ngOnInit() {
    this.http.get('http://osdintern2.azurewebsites.net/FlashCardCategories/9d3b927a551342ecad0cb74a253fda15')
      .subscribe(data => {
        this.result = data as Category
        this.name = this.result.name;
        this.face=this.result.isFaceAShowFirst;
      });
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
