import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/http';
import { Headers } from '@angular/http';
import { AppSettings } from './constants'
@Injectable({
  providedIn: 'root'
})
export class VmServicesService {

  constructor(private http: HttpClient) { }


  // postInputParams(params) {
  //   const headers = new Headers({
  //     'Content-Type': "application/JSON",
  //   });
  //   return this.http.post("http://192.169.243.70:4006/sendemail", params, { headers: headers });
  // }

  getData(params) {

    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(AppSettings.contactData, params, { headers: headers })
  }
  subscribe(params) {

    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(AppSettings.subscribe, params, { headers: headers })
  }

}
