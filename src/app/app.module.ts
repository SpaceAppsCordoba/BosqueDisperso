import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArbolesComponent } from './components/arboles/arboles.component';
import { LoginComponent } from './components/login/login.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { PosicionComponent } from './components/posicion/posicion.component';
import { CargarFotoComponent } from './components/cargar-foto/cargar-foto.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { PregTutorialComponent } from './components/preg-tutorial/preg-tutorial.component';
import { LogrosComponent } from './components/logros/logros.component';
import { NoPlantarComponent } from './components/no-plantar/no-plantar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArbolesComponent,
    LoginComponent,
    RankingComponent,
    TutorialComponent,
    PosicionComponent,
    CargarFotoComponent,
    PublicarComponent,
    PregTutorialComponent,
    LogrosComponent,
    NoPlantarComponent,
    MapaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
