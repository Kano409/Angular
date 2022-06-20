import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
})
export class UsdInrPipe implements PipeTransform {
  transform(value: string, gender: string): any {
    if (gender.toLowerCase() == 'male') {
      return 'Mr.' + value;
    } else {
      return 'Miss.' + value;
    }
  }
}
