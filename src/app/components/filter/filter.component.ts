import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  termino: string;
  peliculas: any;

  constructor(private _ps: PeliculasService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe(params => this.termino = params['termino']);

  }

  ngOnInit() {

    this._ps.buscarPelicula(this.termino)
      .subscribe(data => this.peliculas = data.results);

    localStorage.setItem('terminoBusqueda', this.termino);
  }

  buscar() {
    localStorage.setItem('terminoBusqueda', this.termino);

    this._router.navigate(['buscar', this.termino]);

    this._ps.buscarPelicula(this.termino)
      .subscribe(data => this.peliculas = data.results);
  }

}
