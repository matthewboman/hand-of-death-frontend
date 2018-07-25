import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMobile: Boolean;

  constructor() { }

  ngOnInit() {
    ( typeof window.orientation !== "undefined") ||
      (navigator.userAgent.indexOf('IEMobile') !== -1 ) ? true : false;
  }

}
