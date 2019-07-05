import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { IframePipe } from './iframe.pipe';

describe('IframePipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new IframePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
