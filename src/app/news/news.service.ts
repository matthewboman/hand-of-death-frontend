import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Article } from './article';

@Injectable()
export class NewsService {
  private URL = 'https://api.handofdeathrecords.com/api/news';
  private articles: Article[];

  constructor(private http: HttpClient) {}

  private handleError(error: HttpResponseBase | any) {
    return throwError(error.message);
  }

  getArticles(): Observable<Article[]> {
    if (this.articles) {
      return of(this.articles);
    }
    return this.http.get(`${this.URL}?_format=json`)
      .pipe(
        map((data: any[]) => {
          const articles = data.map(a => new Article(
            a.nid[0].value,
            a.title.length ? a.title[0].value : '',
            a.body.length ? a.body[0].value: '',
            a.field_image.length ? a.field_image[0].url : '',
            a.field_publish_date.length ? a.field_publish_date[0].value : '',
          ));
          this.articles = articles;
          return articles;
        })
      )
      .pipe(
        catchError(this.handleError)
      )
  }

  getArticle(id: string): Observable<Article> {
    if ( this.articles &&
      this.articles.map(article => article.id.toString()).includes(id) ) {
      return of(this.articles.filter(article => article.id == id)[0]);
    }
    return this.http.get(`${this.URL}/${id}?_format=json`)
      .pipe(
        map(res => res[0])
      )
      .pipe(
        map(article => new Article(
          article.nid[0].value,
          article.field_title[0].value,
          article.body[0].value,
          article.field_article_image.length ? article.field_article_image[0].url : '',
          article.field_publish_date[0].value
        ))
      )
      .pipe(
        catchError(this.handleError)
      );
  }
}
