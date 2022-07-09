import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-agentsvenekretnine',
  templateUrl: './agentsvenekretnine.component.html',
  styleUrls: ['./agentsvenekretnine.component.css']
})
export class AgentsvenekretnineComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService) { }

  ngOnInit(): void {
    this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((podaci: Nekretnina[]) => {
      this.nekretnine = podaci
      for (let i = 0; i < podaci.length; i++) {
        this.nekretnine[i].slikazaprikaz =
          this.nekretnine[i].galerija[Math.floor(Math.random() * podaci[i].galerija.length)];
        if (this.nekretnine[i].prodaja) this.nekretnine[i].tekstprodaje = "Prodaje se"
        else this.nekretnine[i].tekstprodaje = "Izdaje se"
        if (this.nekretnine[i].kucailistan == "stan") {
          let x = " sobe";
          if (this.nekretnine[i].brojsoba == 1) x = " soba"
          this.nekretnine[i].kucaspratnost = "Stan sa " +
            this.nekretnine[i].brojsoba + x + " kvadrature " + this.nekretnine[i].kvadratura
        } else {
          this.nekretnine[i].kucaspratnost = "Kuca kvadrature " + this.nekretnine[i].kvadratura
        }
      }
    })
  }

  nekretnine: Nekretnina[]

  Promovisi(id) {

    this.nekretninaServis.azurirajPromovisanje(true, id).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {
      }
    })
  }


  IzbaciIzPromovisanih(id) {
    this.nekretninaServis.azurirajPromovisanje(false, id).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {
      }
    })
  }

}
