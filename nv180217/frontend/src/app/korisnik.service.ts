import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  registrujSe(ime, prezime, korisnickoime, lozinka, slika, adresaeposte, grad, drzava, tip, status) {
    const podaci = {
      ime: ime,
      prezime: prezime,
      korisnickoime: korisnickoime,
      lozinka: lozinka,
      slika: slika,
      adresaeposte: adresaeposte,
      grad: grad,
      drzava: drzava,
      tip: tip,
      status: status
    }

    return this.http.post(`${this.uri}/korisnici/registrujSe`, podaci);

  }

  prijava(korisnickoime, lozinka) {
    const podaci = {
      korisnickoime: korisnickoime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/prijava`, podaci);

  }

  dohvatiKorisnikaSaKorimenom(korisnickoime) {
    const podaci = {
      korisnickoime: korisnickoime
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnikaSaKorimenom`, podaci);

  }

  dohvatiKorisnikaSaAdresom(adresaeposte) {
    const podaci = {
      adresaeposte: adresaeposte
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnikaSaAdresom`, podaci);

  }

  promenaLozinke(korisnickoime, lozinka) {
    const podaci = {
      korisnickoime: korisnickoime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/promenaLozinke`, podaci);

  }


  AzurirajPodatke(ime, prezime, korisnickoime, slika, grad, drzava){
    const podaci = {
      ime: ime,
      prezime: prezime,
      korisnickoime: korisnickoime,
      slika: slika,
      grad: grad,
      drzava: drzava,
    }

    return this.http.post(`${this.uri}/korisnici/AzurirajPodatke`, podaci);

  }

  dohvatiSveKorisnikeOsimOznacenog(tip){
    const podaci = {
      tip: tip
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiSveKorisnikeOsimOznacenog`, podaci);

  }

  obrisiKorisnika(korisnickoime){
    const podaci = {
      korisnickoime: korisnickoime
    }

    return this.http.post(`${this.uri}/korisnici/obrisiKorisnika`, podaci);

  }

  dohvatiKorisnikesaStatusom(status){
    const podaci = {
      status: status
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnikesaStatusom`, podaci);

  }

  azurirajStatus(korisnickoime,status){
    const podaci = {
      korisnickoime: korisnickoime,
      status:status
    }

    return this.http.post(`${this.uri}/korisnici/azurirajStatus`, podaci);

  }


}
