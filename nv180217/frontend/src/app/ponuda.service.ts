import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonudaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  dodajPonudu(id, datumOd, datumDo, posiljalac, cena, status) {
    let podaci = {
      id: id,
      datumOd: datumOd,
      datumDo: datumDo,
      posiljalac: posiljalac,
      cena: cena,
      status: status
    }

    return this.http.post(`${this.uri}/ponuda/dodajPonudu`, podaci);
  }

  
  dohvatiPonuduSaIdIStatusom(id, status) {
    let podaci = {
      id: id,
      status: status
    }

    return this.http.post(`${this.uri}/ponuda/dohvatiPonuduSaIdIStatusom`, podaci);
  }

  dohvatiPonuduSaIdPosiljaocemIstatusom(id, status, posiljalac) {
    let podaci = {
      id: id,
      status: status,
      posiljalac: posiljalac
    }

    return this.http.post(`${this.uri}/ponuda/dohvatiPonuduSaIdPosiljaocemIstatusom`, podaci);
  }

  AzurirajPonudu(id, status, posiljalac, novistatus, profitagencije) {
    let podaci = {
      id: id,
      status: status,
      posiljalac: posiljalac,
      novistatus:novistatus,
      profitagencije:profitagencije
    }

    return this.http.post(`${this.uri}/ponuda/AzurirajPonudu`, podaci);
  }

  AzurirajsvePonude(id, status, novistatus) {
    let podaci = {
      id: id,
      status: status,
      novistatus:novistatus
    }

    return this.http.post(`${this.uri}/ponuda/AzurirajsvePonude`, podaci);
  }

  AzurirajsvePonudusavremenom(id, status, novistatus, datumDo,datumOd) {
    let podaci = {
      id: id,
      status: status,
      novistatus:novistatus,
      datumDo:datumDo,
      datumOd:datumOd
    }

    return this.http.post(`${this.uri}/ponuda/AzurirajsvePonudusavremenom`, podaci);
  }


  dohvatiPonuduSaStatusom(status) {
    let podaci = {
      status: status
    }

    return this.http.post(`${this.uri}/ponuda/dohvatiPonuduSaStatusom`, podaci);
  }


}
