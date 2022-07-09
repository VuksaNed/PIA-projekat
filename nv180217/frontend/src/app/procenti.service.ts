import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcentiService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  AzurirajsvePonudusavremenom(prodaja,iznajmljivanje) {
    let podaci = {
      prodaja: prodaja,
      iznajmljivanje: iznajmljivanje
    }

    return this.http.post(`${this.uri}/procenti/AzurirajsvePonudusavremenom`, podaci);
  }

  dohvatiProcente() {

    return this.http.get(`${this.uri}/procenti/dohvatiProcente`);
  
  }
  

}
