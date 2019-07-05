import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { IframePipe } from '../../shared/iframe.pipe';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  id: string;
  iframeWidth: number;
  iframeHeight: number;
  errorMessage: string;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getArtist();

    // base embeded Soundcloud && Spotify iFrames on screen size
    this.iframeWidth = (window.innerWidth <= 480) ? window.innerWidth - 30 : window.innerWidth / 2;
    this.iframeHeight = window.innerHeight / 2;
  }

  getArtist(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.artistService.getArtist(params.id)
          .subscribe(
            artist => this.artist = artist,
            error => {
              // console.log(error);
              this.errorMessage = "Unable to load details at this time";
            }
          );
      }
    );
  }
}
