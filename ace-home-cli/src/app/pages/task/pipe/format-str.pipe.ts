import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStr'
})
export class FormatStrPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace('_', ' ').toLowerCase();
    value = value.charAt(0).toUpperCase() + value.substring(1);
    return value;
  }

}
