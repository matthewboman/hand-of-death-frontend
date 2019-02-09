import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Release } from './release.model';

@Injectable()
export class ReleaseService {
  private releasesURL = `https://api.handofdeathrecords.com/api/releases`;
  private releases: Release[];

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

  getReleases(): Observable<Release[]> {
    if (this.releases) {
      return Observable.of(this.releases);
    }
    return this.http.get(`${this.releasesURL}?_format=json`)
      .map((res: Response) => res.json())
      .map(returnedReleases => {
        const releases = returnedReleases.map(r => new Release(
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
        this.releases = releases;
        return releases;
      })
      .catch(this.handleError);
  }

  getRelease(id: string): Observable<Release> {
    if ( this.releases &&
      this.releases.map(release => release.id.toString()).includes(id) ) {
      return Observable.of(this.releases.filter(release => release.id == id)[0]);
    }
    return this.http.get(`${this.releasesURL}/${id}/?_format=json`)
      .map((res: Response) => res.json()[0]) // for some reason this comes back as an array?
      .map(r => new Release(
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
      .catch(this.handleError);
  }

}
