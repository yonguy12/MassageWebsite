import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private router:Router){}
  home(){
    this.router.navigate(['/home'])
  }
  contact(){
    this.router.navigate(['/contact'])
  }
  policies(){
    this.router.navigate(['/policies'])
  }
  massages(){
    this.router.navigate(['/services'])
  }
  prices(){
    this.router.navigate(['/prices'])
  }


}
