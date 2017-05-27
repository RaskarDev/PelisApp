import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOverview'
})
export class NoOverviewPipe implements PipeTransform {

  transform(value: any): any {

    if (value === '') {
      value = 'La película no dispone de sinopsis';
    }

    return value;
  }

}
