import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NekretninaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dohvatiPromovisaneNekretnine() {

    return this.http.get(`${this.uri}/nekretnine/dohvatiPromovisaneNekretnine`);

  }

  dohvatiNekretnineRezPretrage(grad, mincena, maxcena, odobrena) {

    let podaci = {
      grad: grad,
      mincena: mincena,
      maxcena: maxcena,
      odobrena: odobrena
    }
    return this.http.post(`${this.uri}/nekretnine/dohvatiNekretnineRezPretrage`, podaci);

  }

  dohvatiNekretninuSaId(id) {

    let podaci = {
      id: id
    }
    return this.http.post(`${this.uri}/nekretnine/dohvatiNekretninuSaId`, podaci);

  }

  dohvatiSveNekretnine(odobrena) {

    let podaci = {
      odobrena: odobrena
    }

    return this.http.post(`${this.uri}/nekretnine/dohvatiSveNekretnine`, podaci);

  }

  dohvatiNekretninuSaVlasnikom(vlasnik) {

    let podaci = {
      vlasnik: vlasnik
    }
    return this.http.post(`${this.uri}/nekretnine/dohvatiNekretninuSaVlasnikom`, podaci);

  }

  dodajNekretninu(naziv, grad, opstina, ulica, kucailistan, brojspratova, sprat, kvadratura, brojsoba, namesten, galerija, prodaja, cena, vlasnik, promovisana, id, odobrena) {

    let podaci = {
      naziv: naziv,
      grad: grad,
      opstina: opstina,
      ulica: ulica,
      kucailistan: kucailistan,
      brojspratova: brojspratova,
      sprat: sprat,
      kvadratura: kvadratura,
      brojsoba: brojsoba,
      namesten: namesten,
      galerija: galerija,
      prodaja: prodaja,
      cena: cena,
      vlasnik: vlasnik,
      promovisana: promovisana,
      id: id,
      odobrena: odobrena
    }

    return this.http.post(`${this.uri}/nekretnine/dodajNekretninu`, podaci);

  }

  AzurirajPodatke(naziv, grad, opstina, ulica, kucailistan, brojspratova, sprat, kvadratura, brojsoba, namesten, galerija, prodaja, cena, id) {

    let podaci = {
      naziv: naziv,
      grad: grad,
      opstina: opstina,
      ulica: ulica,
      kucailistan: kucailistan,
      brojspratova: brojspratova,
      sprat: sprat,
      kvadratura: kvadratura,
      brojsoba: brojsoba,
      namesten: namesten,
      galerija: galerija,
      prodaja: prodaja,
      cena: cena,
      id: id,
    }

    return this.http.post(`${this.uri}/nekretnine/AzurirajPodatke`, podaci);

  }

  azurirajStatus(odobrena, id) {

    let podaci = {
      id: id,
      odobrena: odobrena
    }

    return this.http.post(`${this.uri}/nekretnine/azurirajStatus`, podaci);

  }

  azurirajPromovisanje(promovisana, id) {

    let podaci = {
      id: id,
      promovisana: promovisana
    }

    return this.http.post(`${this.uri}/nekretnine/azurirajPromovisanje`, podaci);

  }

}
