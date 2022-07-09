import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreglediService {
  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  dohvatiPreglede(id) {
    let podaci = {
      id: id
    }

    console.log('usao')

    return this.http.post(`${this.uri}/pregledi/dohvatiPreglede`, podaci);
  }

  daLiJeVideo(id,korisnickoime,datum) {
    let podaci = {
      id: id,
      korisnickoime:korisnickoime,
      datum:datum
    }

    return this.http.post(`${this.uri}/pregledi/daLiJeVideo`, podaci);
  }

  dodajNekretninu(id,korisnickoime,datum) {
    let podaci = {
      id: id,
      korisnickoime:korisnickoime,
      datum:datum
    }

    return this.http.post(`${this.uri}/pregledi/dodajNekretninu`, podaci);
  }


}
