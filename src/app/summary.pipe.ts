import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class Summary implements PipeTransform {
  transform(value: string) {
    return value.substring(0, 10) + '..read more';
  }
}
