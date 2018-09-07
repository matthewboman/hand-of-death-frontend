import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Article } from './article.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  articles: Article[];
  errorMessage: string;
  subscription: Subscription;

  constructor(private newsService: NewsService) { }

  getArticles(): void {
    this.subscription = this.newsService.getArticles().subscribe(
      articles => {
        this.articles = articles
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
