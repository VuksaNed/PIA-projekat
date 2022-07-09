import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlokiraniService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajBlok(korisnickoime1, korisnickoime2) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      korisnickoime2: korisnickoime2
    }

    return this.http.post(`${this.uri}/blokirani/dodajBlok`, podaci);
  }

  
  dohvatiBlokiraneSaJednim(korisnickoime1) {
    let podaci = {
      korisnickoime1: korisnickoime1
    }

    return this.http.post(`${this.uri}/blokirani/dohvatiBlokiraneSaJednim`, podaci);
  }

  daLiSuBlokirani(korisnickoime1, korisnickoime2) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      korisnickoime2: korisnickoime2
    }

    return this.http.post(`${this.uri}/blokirani/dohvatiBlokiraneSaJednim`, podaci);
  }

  odBlokiraj(korisnickoime1, korisnickoime2) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      korisnickoime2: korisnickoime2
    }

    return this.http.post(`${this.uri}/blokirani/odBlokiraj`, podaci);
  }
  
}
