import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isMobile: Boolean = false;

  ngOnInit () {
    this.isMobile = ( typeof window.orientation !== "undefined") ||
      (navigator.userAgent.indexOf('IEMobile') !== -1 ) ||
      (window.innerWidth <= 480) ? true : false;
  };
}
