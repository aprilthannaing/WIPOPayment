import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-save-master-info',
  templateUrl: './save-master-info.component.html',
  styleUrls: ['./save-master-info.component.styl']
})
export class SaveMasterInfoComponent implements OnInit {
  orderId = "";

  constructor(
    private router: Router,
    private location: Location,
    private ics: RpIntercomService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getSession();
  }

  getSession() {
    console.log(" Session ID: " + this.ics.sessionid);
    const url: string = "/api/rest/version/57/merchant/CB0000000342/session/" + this.ics.sessionid;
    this.http.request('get', url).subscribe(
      (data: any) => {
        console.log("session version: ", data);
      },
      error => {
        this.router.navigate(['fail']);
        console.warn("error: ", error);
      });
  }

  getOrderId() {
    console.log(" Session ID: " + this.ics.sessionid);
    const url: string = "/api/rest/version/57/merchant/CB0000000342/order/" + this.orderId;
    this.http.request('get', url).subscribe(
      (data: any) => {
        console.log("session version: ", data);
      },
      error => {
        this.router.navigate(['fail']);
        console.warn("error: ", error);
      });
  }
}
