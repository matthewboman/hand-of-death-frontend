import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Artist } from './artist.model';
import { ArtistService } from './artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[];
  errorMessage: string;
  subscription: Subscription;

  constructor(private artistService: ArtistService) { }

  getArtists(): void {
    this.subscription = this.artistService.getArtists().subscribe(
      artists => this.artists = artists,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit(): void {
    this.getArtists();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
