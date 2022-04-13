import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { MedecinComponent } from './components/medecin/medecin.component';


const routes: Routes = [
  { path: 'ajouterM', component: MedecinComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'admin', component: AdminComponent },
  

 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
