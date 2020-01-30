import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucars',
  templateUrl: './ucars.component.html',
  styleUrls: ['./ucars.component.css']
})
export class UcarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
