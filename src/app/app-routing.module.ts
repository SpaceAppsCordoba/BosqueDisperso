import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbolesComponent } from './components/arboles/arboles.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RankingComponent } from "./components/ranking/ranking.component";
import { TutorialComponent } from "./components/tutorial/tutorial.component";
import { PosicionComponent } from "./components/posicion/posicion.component";
import { CargarFotoComponent } from "./components/cargar-foto/cargar-foto.component";
import { PublicarComponent } from "./components/publicar/publicar.component";
import { PregTutorialComponent } from "./components/preg-tutorial/preg-tutorial.component";
import { LogrosComponent } from "./components/logros/logros.component";
import { NoPlantarComponent } from "./components/no-plantar/no-plantar.component";
import { MapaComponent } from "./components/mapa/mapa.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { Arbol1Component } from "./components/arbol1/arbol1.component";
import { Arbol2Component } from "./components/arbol2/arbol2.component";
import { Arbo3Component } from "./components/arbo3/arbo3.component";
import { Arbol4Component } from "./components/arbol4/arbol4.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'arboles', component: ArbolesComponent},
  {path:'login', component: LoginComponent},
  {path:'ranking', component: RankingComponent},
  {path:'tutorial', component: TutorialComponent},
  {path:'posicion', component: PosicionComponent},
  {path:'cargar-foto', component: CargarFotoComponent},
  {path:'subir', component: PublicarComponent},
  {path:'preg-tutorial', component: PregTutorialComponent},
  {path:'logros', component: LogrosComponent},
  {path:'no-plantar', component: NoPlantarComponent},
  {path:'mapa', component: MapaComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'arbol1', component: Arbol1Component},
  {path:'arbol2', component: Arbol2Component},
  {path:'arbol3', component: Arbo3Component},
  {path:'arbol4', component: Arbol4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
