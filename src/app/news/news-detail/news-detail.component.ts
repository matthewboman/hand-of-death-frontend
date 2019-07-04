import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Article } from '../article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: Article;
  id: string;
  errorMessage: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.newsService.getArticle(params.id)
          .subscribe(
            article => {
              console.log(article);
              this.article = article
            },
            error => {
              console.log(error)
              this.errorMessage = "Unable to load specified article";
            }
          );
      }
    )
  }

}
