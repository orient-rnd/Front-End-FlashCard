import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createfalshcard',
  templateUrl: './createfalshcard.component.html',
  styleUrls: ['./createfalshcard.component.scss']
})
export class CreatefalshcardComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit() {
    
  }

  onSave(data:any){

  }

}
