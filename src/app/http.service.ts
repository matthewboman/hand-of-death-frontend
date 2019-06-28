import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { About } from './about/about';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private aboutUrl = `https://api.handofdeathrecords.com/api/about/?_format=json`;

  constructor(private http: HttpClient) { }

  getAboutPage(): Observable<About> {
    return this.http.get(this.aboutUrl)
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
      );
  }
}
