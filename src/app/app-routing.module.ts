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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
