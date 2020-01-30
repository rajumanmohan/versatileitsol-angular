import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodtimes',
  templateUrl: './goodtimes.component.html',
  styleUrls: ['./goodtimes.component.css']
})
export class GoodtimesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
