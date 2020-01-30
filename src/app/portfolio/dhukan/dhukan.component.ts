import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhukan',
  templateUrl: './dhukan.component.html',
  styleUrls: ['./dhukan.component.css']
})
export class DhukanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
