import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  courses:any;
  prices ;
  course ;
  price;

  constructor() {
    this.courses = [ 'English', 'Math' , 'Science' ];
    this.prices = [ '200' , '350' , '500' ]
   
   }

  ngOnInit() {
  }

}
