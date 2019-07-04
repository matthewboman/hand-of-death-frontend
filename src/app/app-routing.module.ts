import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'artists', loadChildren: './artist/artist.module#ArtistModule' },
  { path: 'releases', loadChildren: './release/release.module#ReleaseModule' },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
