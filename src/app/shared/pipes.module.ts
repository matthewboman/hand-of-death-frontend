import { NgModule } from '@angular/core';

import { ImageStringPipe } from '../shared/image-string.pipe';
import { IframePipe } from '../shared/iframe.pipe';

@NgModule({
  declarations: [
    ImageStringPipe,
    IframePipe,
  ],
  imports: [],
  exports: [
    ImageStringPipe,
    IframePipe,
  ]
})
export class PipesModule { }
