import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-inner',
  templateUrl: './portfolio-inner.component.html',
  styleUrls: ['./portfolio-inner.component.css']
})
export class PortfolioInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
