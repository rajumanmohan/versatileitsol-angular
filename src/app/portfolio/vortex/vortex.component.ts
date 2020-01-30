import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vortex',
  templateUrl: './vortex.component.html',
  styleUrls: ['./vortex.component.css']
})
export class VortexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
