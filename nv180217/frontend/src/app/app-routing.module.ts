import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminazurirakorisnikeComponent } from './adminazurirakorisnike/adminazurirakorisnike.component';
import { AdmindodajeComponent } from './admindodaje/admindodaje.component';
import { AdmindodajnekretninuComponent } from './admindodajnekretninu/admindodajnekretninu.component';
import { AdminodobravajnekretnineComponent } from './adminodobravajnekretnine/adminodobravajnekretnine.component';
import { AdminpodesiprocenatComponent } from './adminpodesiprocenat/adminpodesiprocenat.component';
import { AdminugovoreneprodajeComponent } from './adminugovoreneprodaje/adminugovoreneprodaje.component';
import { AgentGuard } from './agent.guard';
import { AgentdogovoreneponudeComponent } from './agentdogovoreneponude/agentdogovoreneponude.component';
import { AgentinboxComponent } from './agentinbox/agentinbox.component';
import { AgentkonverzacijaComponent } from './agentkonverzacija/agentkonverzacija.component';
import { AgentnovanekretninaComponent } from './agentnovanekretnina/agentnovanekretnina.component';
import { AgentodobravanjenekretninaComponent } from './agentodobravanjenekretnina/agentodobravanjenekretnina.component';
import { AgentsvenekretnineComponent } from './agentsvenekretnine/agentsvenekretnine.component';
import { AgentugovoreneprodajeComponent } from './agentugovoreneprodaje/agentugovoreneprodaje.component';
import { BilokoGuard } from './biloko.guard';
import { BrisekorisnikeComponent } from './brisekorisnike/brisekorisnike.component';
import { InboxComponent } from './inbox/inbox.component';
import { IzmenanekretnineComponent } from './izmenanekretnine/izmenanekretnine.component';
import { KoncerzacijaComponent } from './koncerzacija/koncerzacija.component';
import { KorisnikovenekretnineComponent } from './korisnikovenekretnine/korisnikovenekretnine.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { OsnovnipodaciComponent } from './osnovnipodaci/osnovnipodaci.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenalozinkeComponent } from './promenalozinke/promenalozinke.component';
import { RadnikComponent } from './radnik/radnik.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RegistrovankorisnikGuard } from './registrovankorisnik.guard';
import { RegistrovankorisnikComponent } from './registrovankorisnik/registrovankorisnik.component';

const routes: Routes = [
{path:"", component: PocetnaComponent},
{path:"pocetna",component: PocetnaComponent},
{path:"registracija", component: RegistracijaComponent},
{path: "prijava", component:PrijavaComponent},
{path:"admin", component: AdminComponent, canActivate: [AdminGuard]},
{path:"radnik", component: RadnikComponent,canActivate: [AgentGuard]},
{path:"registrovankorisnik", component: RegistrovankorisnikComponent, canActivate: [RegistrovankorisnikGuard]},
{path:"promenalozinke", component: PromenalozinkeComponent, canActivate: [RegistrovankorisnikGuard]},
{path: "osnovnipodaci", component: OsnovnipodaciComponent, canActivate: [RegistrovankorisnikGuard]},
{path: "nekretnina", component: NekretninaComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'nekretnina/:nekretnina', component: NekretninaComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'inbox', component:InboxComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'konverzacija', component:KoncerzacijaComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'konverzacija/:konverzacija', component: KoncerzacijaComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'korisniknekrenina',component: KorisnikovenekretnineComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'izmenanekretnina', component: IzmenanekretnineComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'izmenanekretnina/:nekretnina', component: IzmenanekretnineComponent, canActivate: [RegistrovankorisnikGuard]},
{path: 'odobravanjenekretnina', component:AgentodobravanjenekretninaComponent,canActivate: [AgentGuard]},
{path: 'agentnovanekretnina', component:AgentnovanekretninaComponent,canActivate: [AgentGuard]},
{path: 'agentsvenekretnine', component:AgentsvenekretnineComponent,canActivate: [AgentGuard]},
{path: 'agentinbox', component:AgentinboxComponent,canActivate: [AgentGuard]},
{path: 'agentkonverzacija', component: AgentkonverzacijaComponent,canActivate: [AgentGuard]},
{path: 'agentkonverzacija/:konverzacija', component: AgentkonverzacijaComponent,canActivate: [AgentGuard]},
{path: 'dogovoreneponude', component: AgentdogovoreneponudeComponent,canActivate: [AgentGuard]},
{path: 'adinazurirajpodatke', component: AdminazurirakorisnikeComponent, canActivate: [AdminGuard]},
{path: 'admindodajkorisnika', component: AdmindodajeComponent, canActivate: [AdminGuard]},
{path: 'brisikorisnike', component: BrisekorisnikeComponent, canActivate: [AdminGuard]},
{path: 'admindodajnekretninu', component: AdmindodajnekretninuComponent, canActivate: [AdminGuard]},
{path: 'adminodobrinekretninu', component: AdminodobravajnekretnineComponent, canActivate: [AdminGuard]},
{path: 'podesiprocente', component: AdminpodesiprocenatComponent, canActivate: [AdminGuard]},
{path: 'adminugovoreneprodaje', component: AdminugovoreneprodajeComponent, canActivate: [AdminGuard]},
{path: 'agentugovoreneprodaje', component: AgentugovoreneprodajeComponent,canActivate: [AgentGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
