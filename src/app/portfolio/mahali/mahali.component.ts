import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahali',
  templateUrl: './mahali.component.html',
  styleUrls: ['./mahali.component.css']
})
export class MahaliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
