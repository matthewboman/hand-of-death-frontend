import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Article } from '../article.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  id: string;
  errorMessage: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getArticle(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.newsService.getArticle(params['id'])
          .subscribe(
            article => this.article = article,
            error => this.errorMessage = <any>error
          );
      }
    )
  }

  ngOnInit(): void {
    this.getArticle();
  }

}
