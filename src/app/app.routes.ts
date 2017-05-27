import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FilterComponent } from './components/filter/filter.component';

const APP_ROUTING: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'buscar/:termino', component: FilterComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING);
