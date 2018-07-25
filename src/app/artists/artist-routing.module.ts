import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsComponent } from './artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

const artistRoutes: Routes = [
  {
    path: '',
    component: ArtistsComponent,
    children: [
      { path: ':id', component: ArtistDetailComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(artistRoutes) ],
  exports: [ RouterModule ]
})
export class ArtistsRoutingModule {}
