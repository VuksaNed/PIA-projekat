import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-osnovnipodaci',
  templateUrl: './osnovnipodaci.component.html',
  styleUrls: ['./osnovnipodaci.component.css']
})
export class OsnovnipodaciComponent implements OnInit {

  constructor(private ruter: Router, private korisnikServis: KorisnikService) { }

  ngOnInit(): void {
    this.korisnik=JSON.parse(localStorage.getItem('ulogovan'))
    this.ime=this.korisnik.ime;
    this.prezime=this.korisnik.prezime
    this.slika=this.korisnik.slika
    this.grad=this.korisnik.grad
    this.drzava=this.korisnik.drzava
  }


  korisnik: Korisnik
  ime: string
  prezime: string
  slika: string
  slikaa:string
  grad: string
  drzava: string
  poruka: string

  Azuriraj(){
    if ((this.korisnik.slika!=this.slika)||(this.slikaa)){
      this.slika=this.slikaa.substr(12,this.slikaa.length); 
    }
    this.korisnikServis.AzurirajPodatke(this.ime,this.prezime,this.korisnik.korisnickoime,this.slika,this.grad,this.drzava).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        localStorage.removeItem('ulogovan')
        this.korisnikServis.prijava(this.korisnik.korisnickoime, this.korisnik.lozinka).subscribe((korisnik: Korisnik) => {
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          this.ruter.navigate(['registrovankorisnik'])
        })
      }
      else {
        this.poruka='Neuspesno azuriranje'
      }
    })
  }

}
