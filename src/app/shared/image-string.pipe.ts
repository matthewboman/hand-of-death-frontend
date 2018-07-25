import { Pipe, PipeTransform } from '@angular/core';

/*
 * Development hack to get around Angular and Drupal having different host URLs
 */

@Pipe({
  name: 'imageString',
  pure: false
})
export class ImageStringPipe implements PipeTransform {

  transform(value: string, filterString: string, propName: string): string {
    const r = /<img[^>]+src="([^">]+)"/g;
    const path = `http://localhost${r.exec(value)[1]}`;
    return path;
  }

}
