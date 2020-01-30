import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tripcare',
  templateUrl: './tripcare.component.html',
  styleUrls: ['./tripcare.component.css']
})
export class TripcareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
