import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Article } from '../article.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: Article[];
  errorMessage: String;
  subscription: Subscription;

  constructor(private newsService: NewsService) { }

  getArticles(): void {
    this.subscription = this.newsService.getArticles().subscribe(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
