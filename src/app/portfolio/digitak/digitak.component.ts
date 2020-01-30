import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitak',
  templateUrl: './digitak.component.html',
  styleUrls: ['./digitak.component.css']
})
export class DigitakComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
