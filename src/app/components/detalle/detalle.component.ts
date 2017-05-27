import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  id = '';
  pelicula: any;
  url: any;
  termino: string;

  constructor(private _ps: PeliculasService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this._activatedRoute.url.subscribe(data => this.url = data);

    this.url = this.url[1].path.slice(-1);
  }

  ngOnInit() {
    this._ps.getMovieById(this.id)
      .subscribe(data => {
        this.pelicula = data;
        console.log(this.pelicula);
      });
  }

  regresar() {
    if (this.url === 'h') {
      this._router.navigate(['inicio']);
    } else if (this.url === 's') {
      this.termino = localStorage.getItem('terminoBusqueda');

      this._router.navigate(['buscar', this.termino]);
    }
  }

}
