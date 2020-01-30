import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.show2017Screen();
    window.scroll(0, 0);

  }
  showMsion = true;
  showVision = false;
  showValues = false;
  show2017 = true;
  show2018 = false;
  show2019 = false;
  showMisionScreen() {
    this.showMsion = true;
    this.showVision = false;
    this.showValues = false;
  }
  showVisionScreen() {
    this.showMsion = false;
    this.showVision = true;
    this.showValues = false;
  }
  showValuesScreen() {
    this.showMsion = false;
    this.showVision = false;
    this.showValues = true;
  }
  show2017Screen() {
    this.show2017 = true;
    this.show2018 = false;
    this.show2019 = false;
  }
  show2018Screen() {
    this.show2017 = false;
    this.show2018 = true;
    this.show2019 = false;
  }
  show2019Screen() {
    this.show2017 = false;
    this.show2018 = false;
    this.show2019 = true;
  }
}
