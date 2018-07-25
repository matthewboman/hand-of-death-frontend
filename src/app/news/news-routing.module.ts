import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: ':id', component: ArticleDetailComponent}
    ]
  }
]
@NgModule({
  imports: [ RouterModule.forChild(newsRoutes) ],
  exports: [ RouterModule ]
})
export class NewsRoutingModule {}
