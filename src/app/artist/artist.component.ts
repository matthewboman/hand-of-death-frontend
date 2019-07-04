import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {
  artists: Artist[];
  subscription: Subscription;
  errorMessage: string;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtists(): void {
    this.subscription = this.artistService.getArtists().subscribe(
      artists => this.artists = artists,
      error => {
        // console.log(error);
        this.errorMessage = "Currently no artists to display";
      }
    );
  }

}
