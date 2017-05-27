import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UrlImagenPipe } from './pipes/url-imagen.pipe';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FilterComponent } from './components/filter/filter.component';
import { NoOverviewPipe } from './pipes/no-overview.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    UrlImagenPipe,
    DetalleComponent,
    FilterComponent,
    NoOverviewPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTES
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
