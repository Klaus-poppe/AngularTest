import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
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
