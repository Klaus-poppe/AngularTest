import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contact(){
    var elems = document.querySelectorAll('.modal');
  //  var instances = M.Modal.init(elems, options);
  }



  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

}
