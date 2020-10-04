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
import { Arbol1Component } from './components/arbol1/arbol1.component';
import { Arbol2Component } from './components/arbol2/arbol2.component';
import { Arbo3Component } from './components/arbo3/arbo3.component';
import { Arbol4Component } from './components/arbol4/arbol4.component';

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
    PerfilComponent,
    Arbol1Component,
    Arbol2Component,
    Arbo3Component,
    Arbol4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
