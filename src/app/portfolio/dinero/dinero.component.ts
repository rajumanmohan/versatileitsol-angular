import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinero',
  templateUrl: './dinero.component.html',
  styleUrls: ['./dinero.component.css']
})
export class DineroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
