import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { Admin1Component } from './components/admin1/admin1.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ConsulterMComponent } from './components/consulter-m/consulter-m.component';
import { MedecinComponent } from './components/medecin/medecin.component';
import { ModifierMComponent } from './components/modifier-m/modifier-m.component';


const routes: Routes = [
  { path: 'ajouterM', component: MedecinComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'admin', component: Admin1Component },
  { path: 'consulterM', component: ConsulterMComponent },
  { path: 'modifierM', component: ModifierMComponent },
  

 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
