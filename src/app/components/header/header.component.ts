import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit() {

  }
  scroll() {
    window.scroll(0, 0);
  }
  contact() {
    window.scroll(0, 0);
  }
  portfolio() {
    window.scroll(0, 0);
  }
  Toggle() {
    this.show = !this.show;

  }

}
