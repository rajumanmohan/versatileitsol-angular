import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solista',
  templateUrl: './solista.component.html',
  styleUrls: ['./solista.component.css']
})
export class SolistaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
