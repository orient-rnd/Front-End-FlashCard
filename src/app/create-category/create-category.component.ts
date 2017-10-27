import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  forgot=false
  category="dwwdwdw";
  dulieuarr = [];
  selectedValue: string;
  faces = [
    {value:true, viewValue: 'Face A is choosen.'},
    {value:false, viewValue: 'Face B is choosen.'}
  ];
  constructor(private http: HttpClient) { 
      // this.http.get('http://osdintern2.azurewebsites.net/FlashCardCategories')
      // .subscribe((dulieu: any) => {
      //   this.dulieuarr = dulieu;
  // })
}
  toggleForgot() {
    this.forgot = !this.forgot;
}
  ngOnInit() {
  }


  onSubmit(name: string,check:string) {
    const body = {
      "name": name,
      "userId": "string",
      "userEmail": "string",
      "isFaceAShowFirst": check,
      "isRandom": true
    };
    // console.log("value",name);
    this.http.post('http://osdintern2.azurewebsites.net/FlashCardCategories' , body)
    .subscribe(res => { console.log(res) },
    err => {
      console.log("Error occured");
    });
  }
}
