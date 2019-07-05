import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistComponent } from './artist.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistService } from './artist.service';

import { PipesModule } from '../shared/pipes.module';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailComponent,
    ArtistPreviewComponent,
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    PipesModule
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistModule { }
