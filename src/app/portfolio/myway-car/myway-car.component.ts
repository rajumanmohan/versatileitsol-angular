import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myway-car',
  templateUrl: './myway-car.component.html',
  styleUrls: ['./myway-car.component.css']
})
export class MywayCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
