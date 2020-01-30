import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loha',
  templateUrl: './loha.component.html',
  styleUrls: ['./loha.component.css']
})
export class LohaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
