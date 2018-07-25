import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Artist } from './artist.model';

@Injectable()
export class ArtistService {
  private artistsURL = `/api/artists`
  private artists: Artist[];

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

  getArtists(): Observable<Artist[]> {
    if (this.artists) {
      return Observable.of(this.artists);
    }
    return this.http.get(`${this.artistsURL}?_format=json`)
      .map((res: Response) => res.json())
      .map(returnedArtists => {
        const artists = returnedArtists.map(a => {
          const images = a.field_artist_image.map(i => i.url);
          const artist = new Artist(
            a.nid[0].value,
            a.title[0].value,
            a.body[0].value,
            a.field_artist_link[0].uri,
            images,
            a.field_spotify[0] ? a.field_spotify[0].value : '',
            a.field_soundcloud[0] ? a.field_soundcloud[0].value : '',
          )
          return artist;
          })
        this.artists = artists;
        return artists;
      })
      .catch(this.handleError)
  }

  getArtist(id: string): Observable<Artist> {
    if ( this.artists &&
      this.artists.map(artist => artist.id.toString()).includes(id) ) {
      return Observable.of(this.artists.filter(artist => artist.id == id)[0]);
    }
    return this.http.get(`${this.artistsURL}/${id}?_format=json`)
      .map((res: Response) => res.json()[0])
      .map(a => {
        const images = a.field_artist_image.map(i => i.url);
        const artist = new Artist(
          a.nid[0].value,
          a.title[0].value,
          a.body[0].value,
          a.field_artist_link[0].uri,
          images,
          a.field_spotify[0] ? a.field_spotify[0].value : '',
          a.field_soundcloud[0] ? a.field_soundcloud[0].value : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/352969763&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        )
        return artist;
      })
      .catch(this.handleError);
  }

}
