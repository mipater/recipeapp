import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, criteria: string = 'asc'): any {
    console.log( value );
    if (value.length === 0) {
      return value;
    }
    switch (criteria) {
      case 'desc': {
       return value.sort((a, b) => {
          const aName = a.name.toUpperCase();
          const bName = b.name.toUpperCase();
          return (aName < bName) ? 1 : (aName > bName) ? -1 : 0;
        });
      }
      case 'asc': {
        return value.sort((a, b) => {
          const aName = a.name.toUpperCase();
          const bName = b.name.toUpperCase();
          return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
        });
      }
    }
  }

}
