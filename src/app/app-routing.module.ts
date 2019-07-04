import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsPreviewComponent } from './news/news-preview/news-preview.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent, children: [
    { path: '', component: NewsPreviewComponent },
    { path: ':id', component: NewsDetailComponent }
  ] },
  { path: 'artists', loadChildren: './artist/artist.module#ArtistModule' },
  { path: 'releases', loadChildren: './release/release.module#ReleaseModule' },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
