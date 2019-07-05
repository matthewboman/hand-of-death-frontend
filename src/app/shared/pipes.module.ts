import { NgModule } from '@angular/core';

import { IframePipe } from './iframe.pipe';

@NgModule({
  declarations: [
    IframePipe,
  ],
  imports: [],
  exports: [
    IframePipe,
  ]
})
export class PipesModule {}
