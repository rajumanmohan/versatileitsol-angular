import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);
  }
  // opendirectors(link) {
  //   this.router.navigate([]).then(result => { window.open(link, '_blank'); });
  // }

}
