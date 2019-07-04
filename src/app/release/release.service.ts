import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Release } from './release';

@Injectable()
export class ReleaseService {
  private URL = 'https://api.handofdeathrecords.com/api/releases';
  private releases: Release[];

  constructor(private http: HttpClient) {}

  private handleError(error: HttpResponseBase | any) {
    return throwError(error.message);
  }

  getReleases(): Observable<Release[]> {
    if (this.releases) {
      return of(this.releases);
    }
    return this.http.get(`${this.URL}?_format=json`)
      .pipe(
        map((data: any[]) => {
          const releases = data.map(r => new Release(
            r.nid[0].value,
            r.field_title[0].value,
            r.field_release_number.length ? r.field_release_number[0].value : '',
            r.field_artist.length ? r.field_artist[0].value : '',
            r.field_store_link.length ? r.field_store_link[0].uri : '',
            r.field_site_link.length ? r.field_site_link[0].uri : '',
            r.field_description.length ? r.field_description[0].value : '',
            r.field_album_art_large.length ? r.field_album_art_large[0].url : '',
            r.field_album_art_small.length ? r.field_album_art_small[0].url : '',
            r.field_spotify[0] ? r.field_spotify[0].value : '',
            r.field_soundcloud[0] ? r.field_soundcloud[0].value : '',
          ));
          this.releases = releases;
          return releases;
        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  getRelease(id: string): Observable<Release> {
    if (
      this.releases &&
      this.releases.map((release: Release) => release.id.toString()).includes(id)
    ) {
      return of(
        this.releases.filter((release: Release) => release.id == id)[0]
      );
    }

    return this.http.get(`${this.URL}/${id}?_format=json`)
      .pipe(
        map(res => res[0])
      )
      .pipe(
        map(r => new Release(
          r.nid[0].value,
          r.field_title[0].value,
          r.field_release_number.length ? r.field_release_number[0].value : '',
          r.field_artist.length ? r.field_artist[0].value : '',
          r.field_store_link.length ? r.field_store_link[0].uri : '',
          r.field_site_link.length ? r.field_site_link[0].uri : '',
          r.field_description.length ? r.field_description[0].value : '',
          r.field_album_art_large.length ? r.field_album_art_large[0].url : '',
          r.field_album_art_small.length ? r.field_album_art_small[0].url : '',
          r.field_spotify[0] ? r.field_spotify[0].value : '',
          r.field_soundcloud[0] ? r.field_soundcloud[0].value : '',
        ))
      )
      .pipe(
        catchError(this.handleError)
      );
  }
}
