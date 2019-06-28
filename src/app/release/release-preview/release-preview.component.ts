import { Component, Input } from '@angular/core';

import { Release } from '../release';

@Component({
  selector: 'app-release-preview',
  templateUrl: './release-preview.component.html',
  styleUrls: ['./release-preview.component.scss']
})
export class ReleasePreviewComponent {
  @Input() release: Release;
  @Input() index: number;

  constructor() { }

}
