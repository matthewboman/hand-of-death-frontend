import { Component, Input } from '@angular/core';

import { TouringArtist } from '../tour';

@Component({
  selector: 'app-tour-preview',
  templateUrl: './tour-preview.component.html',
  styleUrls: ['./tour-preview.component.scss']
})
export class TourPreviewComponent {
  @Input() artist: TouringArtist;
  @Input() index: string;

  constructor() { }

}
