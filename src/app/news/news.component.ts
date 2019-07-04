import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Article } from './article';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  articles: Article[];
  subscription: Subscription;
  errorMessage: string;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.errorMessage = '';
    this.subscription.unsubscribe();
  }

  getArticles(): void {
    this.subscription = this.newsService.getArticles().subscribe(
      articles => this.articles = articles,
      error => {
        // console.log(error);
        this.errorMessage = "No news to display";
      }
    )
  }

}
