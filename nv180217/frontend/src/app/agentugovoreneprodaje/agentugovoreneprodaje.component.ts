import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Nekretnina } from '../models/nekretnine';
import { Ponuda } from '../models/ponuda';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';

@Component({
  selector: 'app-agentugovoreneprodaje',
  templateUrl: './agentugovoreneprodaje.component.html',
  styleUrls: ['./agentugovoreneprodaje.component.css']
})
export class AgentugovoreneprodajeComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiraniServis: BlokiraniService) { }

  ngOnInit(): void {
    
    this.ponudaServis.dohvatiPonuduSaStatusom("prihvaceno").subscribe((ponudee: Ponuda[]) => {
      this.ponude = ponudee
      for (let i = 0; i < this.ponude.length; i++) {
        this.nekretninaServis.dohvatiNekretninuSaId(this.ponude[i].id).subscribe((nek: Nekretnina) => {
          this.ponude[i].vlasnik = nek.vlasnik
          this.ponude[i].nazivnekretnine = nek.naziv
          this.ponude[i].prodaja = nek.prodaja
        })

      }
    })
  }

  ponude: Ponuda[]

}
