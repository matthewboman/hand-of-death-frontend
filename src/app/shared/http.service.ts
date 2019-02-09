import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AboutPage } from '../about/about.model';

@Injectable()
export class HttpService {
  private aboutUrl = `https://api.handofdeathrecords.com/api/about`;
  private aboutPage: AboutPage;
  private spotifyID = `1a55540a8b9640c1906e22d5a3d78447`;
  private spotifyPrivate = `8ccfe880e47f404dbc26b31a1c2c174e8ccfe880e47f404dbc26b31a1c2c174e`;
  private spotifyScopes = `user-read-private user-read-email`;
  private emailServer = `localhost:3000`;

  constructor(private http: Http) {}

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  getAboutPage(): Observable<AboutPage> {
    if (this.aboutPage) {
      return Observable.of(this.aboutPage);
    }
    return this.http.get(`${this.aboutUrl}/?_format=json`)
      .map((res: Response) => res.json()[0])
      .map(returnedAbout => {
        const distributors = returnedAbout.field_distributors.map(d => d.value);
        const about = new AboutPage(
          returnedAbout.title[0].value,
          returnedAbout.body[0].value,
          returnedAbout.field_about_image[0].url,
          distributors,
        );
        return about;
      })
      .catch(this.handleError);
  }

  // getSpotify(): Observable<any> {
  //
  // }

  addEmailToList(email: string): Observable<any> {
    return this.http.post(`https://api.handofdeathrecords.com/api/add-email?_format=json`, { email })
      .map((res: Response) => res.status)
  }

}
