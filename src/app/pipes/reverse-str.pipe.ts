import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string): any {
    if (value.length === 0) {
      return value;
    }
    return value.split('').reverse().join('');
  }

}
