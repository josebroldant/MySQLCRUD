import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormRegistroComponent } from './components/formregistro/formregistro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';

//Routes of the app
const routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'register-form', component: FormRegistroComponent},
  {path: 'profile', component: PerfilComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}//REDIRIGE AL INICIO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
