import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { About } from './about';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  aboutPage: About;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subscription = this.httpService.getAboutPage().subscribe(
      aboutPage => this.aboutPage = aboutPage,
      error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
