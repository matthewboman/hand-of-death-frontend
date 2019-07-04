import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Artist } from './artist';

@Injectable()
export class ArtistService {
  private URL = 'https://api.handofdeathrecords.com/api/artists';
  private DEFAULT_SOUNDCLOUD = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/352969763&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true';
  private artists: Artist[];

  constructor(private http: HttpClient) {}

  private handleError(error: HttpResponseBase | any) {
    return throwError(error.message);
  }

  getArtists(): Observable<Artist[]> {
    if (this.artists) {
      return of(this.artists);
    }
    return this.http.get(`${this.URL}?_format=json`)
      .pipe(
        map((data: any[]) => {
          const artists = data.map(a => new Artist(
            a.nid[0].value,
            a.title[0].value,
            a.body[0].value,
            a.field_artist_link[0].uri,
            a.field_artist_image.map(i => i.url),
            a.field_spotify[0] ? a.field_spotify[0].value : '',
            a.field_soundcloud[0] ? a.field_soundcloud[0].value : ''
          ));
          this.artists = artists;
          return artists;

        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  getArtist(id: string): Observable<Artist> {
    if (
      this.artists &&
      this.artists.map((artist: Artist) => artist.id.toString()).includes(id)
    ) {
      return of(
        this.artists.filter((artist: Artist) => artist.id == id)[0]
      );
    }

    return this.http.get(`${this.URL}/${id}?_format=json`)
      .pipe(
        map(res => res[0])
      )
      .pipe(
        map(artist => new Artist(
          artist.nid[0].value,
          artist.title[0].value,
          artist.body[0].value,
          artist.field_artist_link[0].uri,
          artist.field_artist_image.map(i => i.url),
          artist.field_spotify[0] ? artist.field_spotify[0].value : '',
          artist.field_soundcloud[0] ? artist.field_soundcloud[0].value : this.DEFAULT_SOUNDCLOUD,
        ))
      )
      .pipe(
        catchError(this.handleError)
      );
  }
}
