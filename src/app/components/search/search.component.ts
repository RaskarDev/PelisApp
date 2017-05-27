import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string;
  peliculas: any;

  constructor(private _ps: PeliculasService, private _router: Router) { }

  ngOnInit() {
  }


  buscar() {
    this._router.navigate(['buscar', this.termino]);
  }
}
