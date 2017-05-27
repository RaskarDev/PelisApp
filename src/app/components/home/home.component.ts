import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  peliculasPopulares: any[] = [];
  peliculasCartelera: any[] = [];
  peliculasKids: any[] = [];

  constructor(private _ps: PeliculasService) {
    this._ps.getPopulares()
      .subscribe(data => {
        for (let i = 0; i <= 5; i++) {
          this.peliculasPopulares.push(data.results[i]);
        }
      });

    this._ps.getCartelera()
      .subscribe(data => {
        for (let i = 0; i <= 5; i++) {
          this.peliculasCartelera.push(data.results[i]);
        }
      });

    this._ps.getPopularesKids()
      .subscribe(data => {
        for (let i = 0; i <= 5; i++) {
          this.peliculasKids.push(data.results[i]);
        }
      });
  }

  ngOnInit() {
  }

}
