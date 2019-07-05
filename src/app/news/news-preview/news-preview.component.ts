import { Component, Input } from '@angular/core';

import { Article } from '../article';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor() { }

}
