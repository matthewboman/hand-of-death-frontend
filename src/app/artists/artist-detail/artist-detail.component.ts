import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artist } from '../artist.model';
import { ArtistService } from '../artists.service';
import { IframePipe } from '../../shared/iframe.pipe';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  id: string;
  errorMessage: string;
  iframeWidth: number;
  iframeHeight: number;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.artistService.getArtist(params['id'])
          .subscribe(
            artist => this.artist = artist,
            error => this.errorMessage = <any>error
          );
      }
    )
    this.iframeWidth = (window.innerWidth <= 480) ? window.innerWidth - 30 : window.innerWidth / 2;
    this.iframeHeight = window.innerHeight / 2;
  }

}
