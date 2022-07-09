import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { RegistrovankorisnikComponent } from './registrovankorisnik/registrovankorisnik.component';
import { AdminComponent } from './admin/admin.component';
import { RadnikComponent } from './radnik/radnik.component';
import { PromenalozinkeComponent } from './promenalozinke/promenalozinke.component';
import { OsnovnipodaciComponent } from './osnovnipodaci/osnovnipodaci.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { InboxComponent } from './inbox/inbox.component';
import { KoncerzacijaComponent } from './koncerzacija/koncerzacija.component';
import { KorisnikovenekretnineComponent } from './korisnikovenekretnine/korisnikovenekretnine.component';
import { IzmenanekretnineComponent } from './izmenanekretnine/izmenanekretnine.component';
import { AgentodobravanjenekretninaComponent } from './agentodobravanjenekretnina/agentodobravanjenekretnina.component';
import { AgentnovanekretninaComponent } from './agentnovanekretnina/agentnovanekretnina.component';
import { AgentsvenekretnineComponent } from './agentsvenekretnine/agentsvenekretnine.component';
import { AgentinboxComponent } from './agentinbox/agentinbox.component';
import { AgentkonverzacijaComponent } from './agentkonverzacija/agentkonverzacija.component';
import { AgentdogovoreneponudeComponent } from './agentdogovoreneponude/agentdogovoreneponude.component';
import { AdmindodajeComponent } from './admindodaje/admindodaje.component';
import { AdminazurirakorisnikeComponent } from './adminazurirakorisnike/adminazurirakorisnike.component';
import { BrisekorisnikeComponent } from './brisekorisnike/brisekorisnike.component';
import { AdmindodajnekretninuComponent } from './admindodajnekretninu/admindodajnekretninu.component';
import { AdminodobravajnekretnineComponent } from './adminodobravajnekretnine/adminodobravajnekretnine.component';
import { AdminpodesiprocenatComponent } from './adminpodesiprocenat/adminpodesiprocenat.component';
import { AdminugovoreneprodajeComponent } from './adminugovoreneprodaje/adminugovoreneprodaje.component';
import { AgentugovoreneprodajeComponent } from './agentugovoreneprodaje/agentugovoreneprodaje.component'
import { AdminGuard } from './admin.guard';
import { AgentGuard } from './agent.guard';
import { RegistrovankorisnikGuard } from './registrovankorisnik.guard';
import { BilokoGuard } from './biloko.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    PrijavaComponent,
    PocetnaComponent,
    RegistrovankorisnikComponent,
    AdminComponent,
    RadnikComponent,
    PromenalozinkeComponent,
    OsnovnipodaciComponent,
    NekretninaComponent,
    InboxComponent,
    KoncerzacijaComponent,
    KorisnikovenekretnineComponent,
    IzmenanekretnineComponent,
    AgentodobravanjenekretninaComponent,
    AgentnovanekretninaComponent,
    AgentsvenekretnineComponent,
    AgentinboxComponent,
    AgentkonverzacijaComponent,
    AgentdogovoreneponudeComponent,
    AdmindodajeComponent,
    AdminazurirakorisnikeComponent,
    BrisekorisnikeComponent,
    AdmindodajnekretninuComponent,
    AdminodobravajnekretnineComponent,
    AdminpodesiprocenatComponent,
    AdminugovoreneprodajeComponent,
    AgentugovoreneprodajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AdminGuard, AgentGuard, RegistrovankorisnikGuard, BilokoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
