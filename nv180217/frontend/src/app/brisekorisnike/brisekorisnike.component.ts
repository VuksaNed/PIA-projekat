import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-brisekorisnike',
  templateUrl: './brisekorisnike.component.html',
  styleUrls: ['./brisekorisnike.component.css']
})
export class BrisekorisnikeComponent implements OnInit {

  constructor(private ruter: Router, private korisnikservis: KorisnikService) { }

  ngOnInit(): void {
    this.korisnikservis.dohvatiSveKorisnikeOsimOznacenog("admin").subscribe((kor: Korisnik[]) => {
      this.korisnici = kor
    })
    this.korisnikservis.dohvatiKorisnikesaStatusom("neobradjen").subscribe((kor: Korisnik[]) => {
      this.korisnicinacekanju = kor
    })
  }

  korisnici: Korisnik[]
  korisnicinacekanju: Korisnik[]


  Obrisi(korisnickoime){
    this.korisnikservis.obrisiKorisnika(korisnickoime).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload()
      }
      else {

      }
    })

  }

  Odobri(korisnickoime){
    this.korisnikservis.azurirajStatus(korisnickoime,"prihvacen").subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload()
      }
      else {

      }
    })
  }

  Odbij(korisnickoime){
    this.korisnikservis.azurirajStatus(korisnickoime,"odbijen").subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload()
      }
      else {

      }
    })
  }


}
