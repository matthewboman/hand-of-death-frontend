import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'artists', loadChildren: './artist/artist.module#ArtistModule' },
  { path: 'releases', loadChildren: './release/release.module#ReleaseModule' },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
