import { Component, Input } from '@angular/core';

import { Release } from '../release.model';

@Component({
  selector: 'app-release-preview',
  templateUrl: './release-preview.component.html',
  styleUrls: ['./release-preview.component.css']
})
export class ReleasePreviewComponent {
  @Input() release: Release;
  @Input() index: number;

  constructor() { }

}
