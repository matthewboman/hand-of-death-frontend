import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { About } from '../about/about';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ABOUT_URL = `https://api.handofdeathrecords.com/api/about/?_format=json`;
  private SUBSCRIPTION_URL = 'https://api.handofdeathrecords.com/api/add-email?_format=json';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpResponseBase | any) {
    return throwError(error.message);
  }

  getAboutPage(): Observable<About> {
    return this.http.get(this.ABOUT_URL)
      .pipe(
        map((res) => res[0]) // Drupal returns an array even though there is only one element
      )
      .pipe(
        map(data => new About(
            data.title[0].value,
            data.body[0].value,
            data.field_about_image[0].url,
            data.field_distributors.map(d => d.value)
          )
        )
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  addEmailToList(email: string): Observable<any> {
    return this.http.post(this.SUBSCRIPTION_URL, { email })
      .pipe(
        map((res: any) => res.status)
      )
      .pipe(
        catchError(this.handleError)
      );
  }
}
