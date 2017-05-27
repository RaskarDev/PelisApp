import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImagen'
})
export class UrlImagenPipe implements PipeTransform {

  urlImagen = 'http://image.tmdb.org/t/p/w';

  transform(value: string, size: any): string {
    let imagen = this.urlImagen + size + value;

    if (value === null) {
      imagen = '../../assets/img/noimage.png';
    }

    return imagen;
  }

}
