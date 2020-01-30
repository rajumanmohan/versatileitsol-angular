import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-wheelers',
  templateUrl: './see-wheelers.component.html',
  styleUrls: ['./see-wheelers.component.css']
})
export class SeeWheelersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
