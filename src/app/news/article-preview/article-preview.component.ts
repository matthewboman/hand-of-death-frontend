import { Component, Input } from '@angular/core';

import { Article } from '../article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor() { }

}
