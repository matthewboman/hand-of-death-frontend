import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  email: string;
  errorMessage: string;
  successMessage: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subscription = this.httpService.getAboutPage().subscribe(
      aboutPage => this.aboutPage = aboutPage,
      error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.successMessage = '';
    this.errorMessage = '';
  }

  submitEmail(form: NgForm): void {
    const { value : { email } } = form;
    this.errorMessage = '';

    console.log(email)

    if (this.validateEmail(email)) {
      // this.httpService.addEmailToList(email).subscribe(
      //   status => this.successMessage = 'Thank you for subscribing',
      //   error => this.errorMessage = 'We were unable to add your email'
      // );
    } else {
      this.errorMessage = 'Please enter a valid email';
    }
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
