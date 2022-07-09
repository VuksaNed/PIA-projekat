import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArhiviraniService } from '../arhivirani.service';
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Arhivirani } from '../models/arhivirani';
import { Blokirani } from '../models/blokirani';
import { Inbox } from '../models/indbox';
import { Nekretnina } from '../models/nekretnine';
import { Ponuda } from '../models/ponuda';
import { Procenti } from '../models/procenti';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';
import { ProcentiService } from '../procenti.service';


@Component({
  selector: 'app-agentdogovoreneponude',
  templateUrl: './agentdogovoreneponude.component.html',
  styleUrls: ['./agentdogovoreneponude.component.css']
})
export class AgentdogovoreneponudeComponent implements OnInit {


  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiraniServis: BlokiraniService,
    private procenatServis: ProcentiService) { }

  ngOnInit(): void {

    this.ponudaServis.dohvatiPonuduSaStatusom("dogovoreno").subscribe((ponudee: Ponuda[]) => {
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
  prodaj: boolean
  korisnik: string



  Prihvati(id, cena, prodajaa, korisnik) {
    this.prodaj = prodajaa
    this.korisnik = korisnik
    if (this.prodaj) {

      this.procenatServis.dohvatiProcente().subscribe((procenat: Procenti) => {
        this.ponudaServis.AzurirajPonudu(id, "dogovoreno", this.korisnik, "prihvaceno", cena * procenat.prodaja / 100).subscribe(resp => {
          this.ponudaServis.AzurirajsvePonude(id, "cekanje", "odbijeno").subscribe(resp => {
            if (resp['poruka'] == 'ok') {
              window.location.reload();
            }
            else {

            }
          })
          this.ponudaServis.AzurirajsvePonude(id, "dogovoreno", "odbijeno").subscribe(resp => {
            if (resp['poruka'] == 'ok') {
              window.location.reload();
            }
            else {

            }
          })
        })
      })

    }
    else {

      this.procenatServis.dohvatiProcente().subscribe((procenat: Procenti) => {
        this.ponudaServis.dohvatiPonuduSaIdPosiljaocemIstatusom(id, "dogovoreno", this.korisnik).subscribe((ponud: Ponuda) => {
          this.ponudaServis.AzurirajPonudu(id, "dogovoreno", this.korisnik, "prihvaceno",cena*procenat.iznajmljivanje/100).subscribe(resp => {
            this.ponudaServis.dohvatiPonuduSaIdIStatusom(id, "cekanje").subscribe((ponudee: Ponuda[]) => {
              let datummojod = new Date(ponud.datumOd)
              let datummojdo = new Date(ponud.datumDo)
              for (let i = 0; i < ponudee.length; i++) {
                let d1 = new Date(ponudee[i].datumOd)
                let d2 = new Date(ponudee[i].datumDo)
                if (((d1 >= datummojod) && (d1 <= datummojdo)) || ((d2 >= datummojod) && (d2 <= datummojdo))) {
                  this.ponudaServis.AzurirajsvePonudusavremenom(id, "cekanje", "odbijeno", ponudee[i].datumDo, ponudee[i].datumOd)
                    .subscribe(resp => {

                    })
                }
              }
            })

            this.ponudaServis.dohvatiPonuduSaIdIStatusom(id, "dogovoreno").subscribe((ponudee: Ponuda[]) => {
              let datummojod = new Date(ponud.datumOd)
              let datummojdo = new Date(ponud.datumDo)
              for (let i = 0; i < ponudee.length; i++) {
                let d1 = new Date(ponudee[i].datumOd)
                let d2 = new Date(ponudee[i].datumDo)
                if (((d1 >= datummojod) && (d1 <= datummojdo)) || ((d2 >= datummojod) && (d2 <= datummojdo))) {
                  this.ponudaServis.AzurirajsvePonudusavremenom(id, "dogovoreno", "odbijeno", ponudee[i].datumDo, ponudee[i].datumOd)
                    .subscribe(resp => {

                    })
                }
              }
            })

          })
        })
      })

    }
  }

  Odbij(id, prodajaa, korisnik) {
    this.prodaj = prodajaa
    this.korisnik = korisnik
    this.ponudaServis.AzurirajPonudu(id, "dogovoreno", this.korisnik, "odbijeno", 0).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }

    })

  }


}
