import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArhiviraniService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  dodajArhivu(korisnickoime1, id) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      id: id
    }

    return this.http.post(`${this.uri}/arhivirani/dodajArhivu`, podaci);
  }


  dohvatiSveArhivirane(korisnickoime1) {
    let podaci = {
      korisnickoime1: korisnickoime1
    }

    return this.http.post(`${this.uri}/arhivirani/dohvatiSveArhivirane`, podaci);
  }

  odArhiviraj(korisnickoime1, id) {
    let podaci = {
      korisnickoime1: korisnickoime1,
      id:id
    }

    return this.http.post(`${this.uri}/arhivirani/odArhiviraj`, podaci);
  }


}
