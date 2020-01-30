import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppSettings } from '../config';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-services-api',
  templateUrl: './services-api.component.html',
  styleUrls: ['./services-api.component.css']
})
export class ServicesApiComponent implements OnInit {
  constructor(private http: Http, private _router: Router) {
  }
  postInputParams(params, url) {
    const headers = new Headers({
      'Content-Type': "application/JSON",
    });
    return this.http.post(AppSettings.baseUrl + url, params, { headers: headers });
  }
  ngOnInit() {
  }

}
