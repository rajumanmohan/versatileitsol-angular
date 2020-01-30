import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samatha',
  templateUrl: './samatha.component.html',
  styleUrls: ['./samatha.component.css']
})
export class SamathaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
