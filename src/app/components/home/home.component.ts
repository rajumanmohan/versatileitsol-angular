import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
export const fadeInOut = (name = 'fadeInOut', duration = 0.1) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${duration}s ease-in-out`)
    ]),
    transition(':leave', [animate(`${duration}s ease-in-out`, style({ opacity: 0 }))])
  ])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInOut('fadeInOut-1', 0.5),
    fadeInOut('fadeInOut-2', 0.5),
    fadeInOut('fadeInOut-3', 0.5)
  ]
})
export class HomeComponent implements OnInit {
  show = true;

  isActive: boolean = true;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  
  }
  scroll() {
    window.scroll(0, 0);
  }
  contact() {
    window.scroll(0, 0);
  }
  portfolio() {
    window.scroll(0, 0);
  }
  Toggle() {
    this.show = !this.show;
  }
  //   toggle() {
  //     this.isActive = !this.isActive;
  //  }

}
