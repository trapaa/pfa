import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MedecinComponent } from './components/medecin/medecin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Admin1Component } from './components/admin1/admin1.component';
import { ConsulterMComponent } from './components/consulter-m/consulter-m.component';
import { ModifierMComponent } from './components/modifier-m/modifier-m.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavbarComponent,
    SignUpComponent,
    MedecinComponent,
    Admin1Component,
    ConsulterMComponent,
    ModifierMComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
