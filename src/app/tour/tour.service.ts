import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TourDate, TouringArtist } from './tour';

@Injectable()
export class TourService {
  private URL = 'https://api.handofdeathrecords.com/api/tour?_format=json';
  private SONGKICK_URL = 'https://api.songkick.com/api/3.0/artists';
  private SONGKICK_API_KEY = `wBW2144SSOTFdqaF`;
  private tourDates: TourDate[];
  private touringArtist: TouringArtist[];

  constructor(private http: HttpClient) {}

  private handleError(error: HttpResponseBase | any) {
    return throwError(error.message);
  }

  getTouringArtists(): Observable<TouringArtist[]> {
    if (this.touringArtist) {
      return of(this.touringArtist);
    }
    return this.http.get(this.URL)
      .pipe(
        map((data: any[]) => {
          const artists = data.map(a => new TouringArtist(
            a.field_touring_artist_name.length ? a.field_touring_artist_name[0].value : '',
            a.field_touring_artist_id.length ? a.field_touring_artist_id[0].value : ''
          ));
          this.touringArtist = artists;
          return artists;
        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  getTourDates(id: string): Observable<TourDate[]> {
    return this.http.get(`${this.SONGKICK_URL}/${id}/calendar.json?apikey=${this.SONGKICK_API_KEY}`)
      .pipe(
        map((res: any) => {
          const event = res.resultsPage.results.event || [];
          return event;
        })
      )
      .pipe(
        map((tourDates: any[]) => tourDates.map(d => new TourDate(
          d.displayName,
          new Date(d.start.date),
          d.location.city,
          d.uri
        )))
      )
      .pipe(
        catchError(this.handleError)
      );
  }
}
