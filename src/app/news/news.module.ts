import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule {}
