import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RpIntercomService } from './framework/rp-intercom.service';


interface DialogData {
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'WIPO Online Agent System';
  constructor(private http : HttpClient,private ics : RpIntercomService) { }
  ngOnInit(){
    this.http.get('assets/config.json?random=' + Math.random()).subscribe(
      (data:any) => {
        this.ics._apiurl = data.apiurl;
        this.ics._cbpayurl = data.cbpayurl;
        this.ics._mpuurl = data.mpuurl;
      },
  
      () => { }
    );
  }
}
