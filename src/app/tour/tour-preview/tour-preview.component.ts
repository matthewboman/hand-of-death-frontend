import { Component, Input } from '@angular/core';

import { TouringArtist } from '../touring-artist.model';

@Component({
  selector: 'app-tour-preview',
  templateUrl: './tour-preview.component.html',
  styleUrls: ['./tour-preview.component.css']
})
export class TourPreviewComponent {
  @Input() artist: TouringArtist;
  @Input() index: string;

  constructor() { }

}
