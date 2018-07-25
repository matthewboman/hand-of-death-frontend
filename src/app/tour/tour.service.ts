import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { TouringArtist } from './touring-artist.model';
import { TourDate } from './tour-date.model';

@Injectable()
export class TourService {
  private touringUrl: string = `/api/tour`;
  private SONGKICK_API_KEY: string = `wBW2144SSOTFdqaF`;
  private touringArtists: TouringArtist[];

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
    return Observable.throw(errMsg);
  }

  getTouringBands(): Observable<any> {
    if (this.touringArtists) {
      return Observable.of(this.touringArtists);
    }
    return this.http.get(`${this.touringUrl}?_format=json`)
      .map((res: Response) => res.json())
      .map(touringArtists => {
        const artists = touringArtists.map(artist => new TouringArtist(
          artist.field_touring_artist_name.length ? artist.field_touring_artist_name[0].value : '',
          artist.field_touring_artist_id.length ? artist.field_touring_artist_id[0].value : '',
        ))
        this.touringArtists = artists;
        return artists;
      })
      .catch(this.handleError);
  }

  getTourDates(artist_id: string): Observable<any> {
    return this.http.get(`http://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${this.SONGKICK_API_KEY}`)
      .map((res: Response) => res.json().resultsPage.results.event || [])
      .map(concerts => concerts
        .map(concert => new TourDate(
          concert.displayName,
          new Date(concert.start.date),
          concert.location.city,
          concert.uri
        ))
      )
      .catch(this.handleError);
  }

}
