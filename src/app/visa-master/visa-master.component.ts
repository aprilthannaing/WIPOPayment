import { Component, OnInit, ElementRef, ViewChild, Renderer2, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { RpIntercomService } from '../framework/rp-intercom.service';

declare var Checkout;

@Component({
  selector: 'app-visa-master',
  templateUrl: './visa-master.component.html',
  styleUrls: ['./visa-master.component.styl']
})

export class VisaMasterComponent implements OnInit {
  merchantId = "CB0000000342";
  apiPassword = "a3102e136bdc8eb7d986804dfa533e02";
  sessionId = "";
  orderId = "24";
  amount = "10.00";
  returnUrl = "http://localhost:4200/#/saveMaster";
  basicAuth = 'Basic QWNWUTBIX05QTVlWMDIzSDhMM3Y2alhNcDRVdaUN2V0M4Mmo4a19hodjdkdS14M3F4dFJ6Y2pNTnRPcGN6OUpPdjU1TW9jTllsEV1p5WURWNm46RUZJRWtJd0dYdDFJSTdFRmlEdVQ3UWExV2ZXWDZnYmw3Z2w5ajgwZVlsVjI1ODdfUTRHSUxCSWxZfOGg1SzRRZTFhMZU1yVgFZGRThIWXAyRjA=';
  successIndicator = "";
  description = "Ordered goods";
  currency = "MMK";

  constructor(
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private ics: RpIntercomService) {
    this.generate();
  }

  ngOnInit(): void {
  }

  generate() {
    const encodedString: any = btoa("merchant." + this.merchantId + ":" + this.apiPassword);
    const url: string = window["_mpsgurl"] + "/api/rest/version/57/merchant/CB0000000342/session";

    const json: any = {
      "apiOperation": "CREATE_CHECKOUT_SESSION",
      "interaction": {
        "operation": "PURCHASE",
        "returnUrl": this.returnUrl
      },
      "order": {
        "amount": this.amount,
        "currency": this.currency,
        "description": this.description,
        "id": this.orderId
      }
    };
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', "Basic bWVyY2hhbnQuQ0IwMDAwMDAwMzQyOmEzMTAyZTEzNmJkYzhlYjdkOTg2ODA0ZGZhNTMzZTAy");
    this.http.post(url, json).subscribe(
      (data: any) => {
        this.ics.sessionid = data.session.id;
        this.router.navigate(['mpsg']);
        console.log("this.sessionId : ", this.ics.sessionid);
        console.log("session version: ", data.session.version);
      },
      error => {
        this.router.navigate(['fail']);
        console.warn("error: ", error);
      });
  }

}


