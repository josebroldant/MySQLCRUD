import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormRegistroComponent } from './components/formregistro/formregistro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';

//Routes of the app
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'form-registro', component: FormRegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}//REDIRIGE AL INICIO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
