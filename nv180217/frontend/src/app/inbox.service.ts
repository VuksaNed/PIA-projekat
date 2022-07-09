import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajPoruku(korisnickoime1, korisnickoime2, id, naslov, konverzacija, nekretina) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      korisnickoime2: korisnickoime2,
      id: id,
      naslov: naslov,
      konverzacija: konverzacija,
      nekretina: nekretina
    }

    return this.http.post(`${this.uri}/inbox/dodajPoruku`, podaci);
  }

  dodajPorukuUKonverzaciju(id, text, posiljalac, vreme, procitano) {
    let podaci = {
      text: text,
      posiljalac: posiljalac,
      id: id,
      vreme: vreme,
      procitano: procitano
    }

    return this.http.post(`${this.uri}/inbox/dodajPorukuUKonverzaciju`, podaci);
  }

  dohvatiPonudeZaKorisnikeInekretninu(korisnickoime1, nekretina) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      nekretina: nekretina
    }

    return this.http.post(`${this.uri}/inbox/dohvatiPonudeZaKorisnikeInekretninu`, podaci);
  }


  dohvatiPonudeZaKorisnike(korisnickoime1) {

    let podaci = {
      korisnickoime1: korisnickoime1
    }

    return this.http.post(`${this.uri}/inbox/dohvatiPonudeZaKorisnike`, podaci);
  }

  dohvatiInboxSaIdom(id) {

    let podaci = {
      id: id
    }

    return this.http.post(`${this.uri}/inbox/dohvatiInboxSaIdom`, podaci);
  }

  azurirajCitanje(konverzacija,id) {

    let podaci = {
      konverzacija:konverzacija,
      id: id
    }

    return this.http.post(`${this.uri}/inbox/azurirajCitanje`, podaci);
  }


}
