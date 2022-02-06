import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(dateStr: string, args?: string): string {
    return moment(dateStr).format(args)
  }

}
