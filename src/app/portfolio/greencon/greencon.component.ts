import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greencon',
  templateUrl: './greencon.component.html',
  styleUrls: ['./greencon.component.css']
})
export class GreenconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
