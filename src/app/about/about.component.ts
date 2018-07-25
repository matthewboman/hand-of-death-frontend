import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AboutPage } from './about.model';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  aboutPage: AboutPage;
  errorMessage: string;
  email: string;
  subscription: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subscription = this.httpService.getAboutPage().subscribe(
      aboutPage => this.aboutPage = aboutPage,
      error => this.errorMessage = <any>error
    );
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  submitEmail() {
    if (this.validateEmail(this.email)) {
      this.errorMessage = "";
      this.httpService.addEmailToList(this.email).subscribe(
        status => this.email = "",
        error => this.errorMessage = "There was an error adding you to the list",
      )
    } else {
      this.errorMessage = 'Please enter a valid email';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
