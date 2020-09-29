import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private http : HttpClient,
    ) {   
   }

  ngOnInit(): void {   
  }

  payment(){
    this.router.navigate(['mpu-payment']);
  } 

  cbPay(){
    this.router.navigate(['confirm']);
  } 

  success(){
    this.router.navigate(['success']);
  } 

  fail(){
    this.router.navigate(['fail']);
  } 

  visa (){
    this.router.navigate(['visa']);
  }
}
