import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gati',
  templateUrl: './gati.component.html',
  styleUrls: ['./gati.component.css']
})
export class GatiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
