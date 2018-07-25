import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
  { path: 'about', component: AboutComponent },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'releases', loadChildren: './releases/releases.module#ReleasesModule' },
  { path: 'store', component: StoreComponent },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
