import { Component, Input } from '@angular/core';

import { Artist } from '../artist';

@Component({
  selector: 'app-artist-preview',
  templateUrl: './artist-preview.component.html',
  styleUrls: ['./artist-preview.component.scss']
})
export class ArtistPreviewComponent {
  @Input() artist: Artist;
  @Input() index: number;

  constructor() { }
}
