import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey = '5490a655a20b3e94fc1feb41a2128740';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }

  getPopulares() {

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getCartelera() {

    let fechaActual = new Date();

    let fechaFormateada = `${fechaActual.getFullYear()}-0${fechaActual.getMonth()}-${fechaActual.getDate()}`;

    console.log(fechaFormateada);

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.lte=${fechaFormateada}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    console.log(url);

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getPopularesKids() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=ES&certification.lte=APTA&sort_by=popularity.desc&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;

    console.log(url);

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  buscarPelicula(texto: string) {

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getMovieById(id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
