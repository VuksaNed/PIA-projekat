import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-adminazurirakorisnike',
  templateUrl: './adminazurirakorisnike.component.html',
  styleUrls: ['./adminazurirakorisnike.component.css']
})
export class AdminazurirakorisnikeComponent implements OnInit {

  constructor(private ruter: Router, private korisnikservis: KorisnikService) { }

  ngOnInit(): void {
    this.korisnikservis.dohvatiSveKorisnikeOsimOznacenog("admin").subscribe((kor: Korisnik[]) => {
      this.korisnici = kor
      this.izabrankorisnik = ""
    })
  }

  korisnici: Korisnik[]
  izabrankorisnik: string


  korisnik: Korisnik
  ime: string
  prezime: string
  slika: string
  slikaa: string
  grad: string
  drzava: string
  poruka: string
  porukaa: string

  onChange($event) {
    this.korisnikservis.dohvatiKorisnikaSaKorimenom(this.izabrankorisnik).subscribe((kor: Korisnik) => {
      this.korisnik = kor
      this.ime = this.korisnik.ime;
      this.prezime = this.korisnik.prezime
      this.slika = this.korisnik.slika
      this.grad = this.korisnik.grad
      this.drzava = this.korisnik.drzava
    })
    this.poruka=""
    this.porukaa=""
  }


  Azuriraj() {
    if ((this.korisnik.slika != this.slika) || (this.slikaa)) {
      this.slika = this.slikaa.substr(12, this.slikaa.length);
    }
    this.korisnikservis.AzurirajPodatke(this.ime, this.prezime, this.korisnik.korisnickoime, this.slika, this.grad, this.drzava).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.porukaa = 'Uspeno su azurirani podaci'
      }
      else {
        this.poruka = 'Neuspesno azuriranje'
      }
    })
  }



}
