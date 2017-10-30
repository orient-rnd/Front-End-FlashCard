import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})

export class CreateCategoryComponent implements OnInit {
  forgot=true;
  category="dwwdwdw";
  dulieuarr = [];
  selectedValue: string;
  faces = [
    {value:true, viewValue: 'Face A is choosen.'},
    {value:false, viewValue: 'Face B is choosen.'}
  ];
  constructor(private router: Router,private http: HttpClient,private _location: Location) { 
}
  toggleForgot() {
    this.forgot = !this.forgot;
}

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/category');
}

  backClicked() {
    this._location.back();
}

  onSubmit(name: string,check:string) {
    const body = {
      "name": name,
      "userId": "string",
      "userEmail": "string",
      "isFaceAShowFirst": check,
      "isRandom": true
    };
    this.http.post('http://osdintern2.azurewebsites.net/FlashCardCategories' , body)
    .subscribe(res => { console.log(res) },
    );
  }
}
