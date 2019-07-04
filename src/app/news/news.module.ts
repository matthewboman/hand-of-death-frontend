import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    NewsDetailComponent,
    NewsPreviewComponent,
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
