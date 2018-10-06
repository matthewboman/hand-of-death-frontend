import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Article } from './article.model';

@Injectable()
export class NewsService {
  private articlesURL = `https://api.handofdeathrecords.com/api/news`;
  private articles: Article[];

  constructor(private http: Http) {}

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  getArticles(): Observable<Article[]> {
    if (this.articles) {
      return Observable.of(this.articles);
    }
    return this.http.get(`${this.articlesURL}?_format=json`)
      .map((res: Response) => res.json())
      .map(returnedArticles => {
        console.log('returned', returnedArticles)
        const articles = returnedArticles.map(article => new Article(
          article.nid[0].value,
          article.title.length ? article.title[0].value : '',
          article.body.length ? article.body[0].value: '',
          article.field_image.length ? article.field_image[0].url : '',
          article.field_publish_date.length ? article.field_publish_date[0].value : '',
        ));
        console.log('article is', articles[0])
        this.articles = articles;
        return articles;
      })
      .catch(this.handleError);
  }

  getArticle(id: string): Observable<Article> {
    if ( this.articles &&
      this.articles.map(article => article.id.toString()).includes(id) ) {
      return Observable.of(this.articles.filter(article => article.id == id)[0]);
    }
    return this.http.get(`${this.articlesURL}/${id}?_format=json`)
      .map((res: Response) => res.json()[0])
      .map(article => new Article (
          article.nid[0].value,
          article.field_title[0].value,
          article.body[0].value,
          article.field_article_image.length ? article.field_article_image[0].url : '',
          article.field_publish_date[0].value
        )
      )
      .catch(this.handleError);
  }

}
