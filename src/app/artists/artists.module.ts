import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsComponent } from './artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';
import { ArtistsRoutingModule } from './artist-routing.module';
import { ArtistService } from './artists.service';

import { PipesModule } from '../shared/pipes.module';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailComponent,
    ArtistPreviewComponent,
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    PipesModule,
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistsModule {}
