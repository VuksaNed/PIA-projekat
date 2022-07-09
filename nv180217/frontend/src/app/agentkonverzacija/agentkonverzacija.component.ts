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
  selector: 'app-agentkonverzacija',
  templateUrl: './agentkonverzacija.component.html',
  styleUrls: ['./agentkonverzacija.component.css']
})
export class AgentkonverzacijaComponent implements OnInit {


  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiraniServis: BlokiraniService,
    private procenatServis: ProcentiService) { }

  ngOnInit(): void {
    this.nesto = this.ruta.snapshot.paramMap.get('konverzacija')
    let kor = "agencija"
    this.inboxServis.dohvatiInboxSaIdom(parseInt(this.nesto)).subscribe((inbox: Inbox) => {
      this.konverzacija = inbox;

      for (let i = 0; i < inbox.konverzacija.length; i++) {
        if (this.konverzacija.konverzacija[i].posiljalac != kor) this.konverzacija.konverzacija[i].procitano = true;
        let x = inbox.konverzacija[i].vreme.slice(0, 19)
        this.konverzacija.konverzacija[i].vremeuformatuzaispit = x.slice(8, 10) + "." + x.slice(5, 7) + "." +
          x.slice(0, 4) + "  " + x.slice(11, 13) + ":" +
          x.slice(14, 16) + ":" + x.slice(17, 19) + "  "
        this.konverzacija.konverzacija[i].posiljalaczaispit = this.konverzacija.konverzacija[i].posiljalac

        this.konverzacija.konverzacija[i].posiljalaczaispit = this.konverzacija.konverzacija[i].posiljalac
        this.nekretninaServis.dohvatiNekretninuSaId(this.konverzacija.nekretina).subscribe((nek: Nekretnina) => {

          if ((this.konverzacija.konverzacija[i].posiljalac == 'agencija') || (this.konverzacija.konverzacija[i].posiljalac == nek.vlasnik))
            this.konverzacija.konverzacija[i].posiljalaczaispit = 'vlasnik'

          this.blokiraniServis.daLiSuBlokirani(this.konverzacija.korisnickoime1, this.konverzacija.korisnickoime2).subscribe((blok: Blokirani[]) => {
            if (blok.length != 0) {
              this.blokiran = 1
              let kor = "agencija"
              if (blok[0].korisnickoime2 == kor)
                this.blokiran = 2
            } else {
              this.blokiran = 0;
            }
          })

        })

        this.nekretninaServis.dohvatiNekretninuSaId(this.konverzacija.nekretina).subscribe((nek: Nekretnina) => {
          this.nekretnina = nek
          this.prodaj = nek.prodaja
          if (nek.vlasnik == kor) {

            if (inbox.korisnickoime1 == kor) {
              this.korisnik = inbox.korisnickoime2
            }
            else {
              this.korisnik = inbox.korisnickoime1
            }
            this.prihvatiiliposalji = true
            this.ponudaServis.dohvatiPonuduSaIdPosiljaocemIstatusom(this.nekretnina.id, "cekanje", this.korisnik).subscribe((p: Ponuda) => {
              if (p) {
                this.dalitrebadaimaprihvatiodbij = true;
              }
              else {
                this.dalitrebadaimaprihvatiodbij = false
              }
            })
          }
          else {
            this.prihvatiiliposalji = false;
          }
        })



      }

      this.inboxServis.azurirajCitanje(this.konverzacija.konverzacija, this.konverzacija.id).subscribe(resp => {
        if (resp['poruka'] == 'ok') {

        }
        else {

        }
      })

    })
  }


  blokiran: number
  nesto: string
  konverzacija: Inbox
  text: string
  porukazaporuku: string

  
  prihvatiiliposalji: boolean
  dalitrebadaimaprihvatiodbij: boolean
  prodaj: boolean =true
  nekretnina: Nekretnina
  korisnik: string

  Blokiraj() {
    let korisnickoime1 = "agencija"
    let korisnickoime2
    if (this.konverzacija.korisnickoime1 == korisnickoime1) {
      korisnickoime2 = this.konverzacija.korisnickoime2
    }
    else {
      korisnickoime2 = this.konverzacija.korisnickoime1
    }

    this.blokiraniServis.dodajBlok(korisnickoime1, korisnickoime2).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.ruter.navigate(['agentinbox'])
      }
      else {

      }
    })
  }

  Odblokiraj() {
    let korisnickoime1 = "agencija"
    let korisnickoime2
    if (this.konverzacija.korisnickoime1 == korisnickoime1) {
      korisnickoime2 = this.konverzacija.korisnickoime2
    }
    else {
      korisnickoime2 = this.konverzacija.korisnickoime1
    }
    this.blokiraniServis.odBlokiraj(korisnickoime1, korisnickoime2).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.ruter.navigate(['agentinbox'])
      }
      else {

      }
    })
  }


  PosaljiPoruku() {

    let korisnickoime1 = "agencija"
    let danas = new Date()
    this.inboxServis.dodajPorukuUKonverzaciju(this.konverzacija.id, this.text, korisnickoime1, danas, false).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })
  }

  Prihvati(){
    if (this.prodaj){
      this.procenatServis.dohvatiProcente().subscribe((procenat: Procenti)=>{
      this.ponudaServis.AzurirajPonudu(this.nekretnina.id, "cekanje", this.korisnik, "prihvaceno",this.nekretnina.cena*procenat.prodaja/100).subscribe(resp => {
        this.ponudaServis.AzurirajsvePonude(this.nekretnina.id,"cekanje","odbijeno").subscribe(resp => {
          if (resp['poruka'] == 'ok') {
            window.location.reload();
          }
          else {
    
          }
        })
      })
    })

    }
    else{
      this.procenatServis.dohvatiProcente().subscribe((procenat: Procenti)=>{
      this.ponudaServis.dohvatiPonuduSaIdPosiljaocemIstatusom(this.nekretnina.id,"cekanje",this.korisnik).subscribe((ponud: Ponuda) => {
      this.ponudaServis.AzurirajPonudu(this.nekretnina.id, "cekanje", this.korisnik, "prihvaceno",ponud.cena*procenat.iznajmljivanje/100).subscribe(resp => {
           this.ponudaServis.dohvatiPonuduSaIdIStatusom(this.nekretnina.id,"cekanje").subscribe((ponudee: Ponuda[]) => {
            let datummojod=new Date(ponud.datumOd)
            let datummojdo=new Date(ponud.datumDo)
            for (let i=0;i<ponudee.length;i++){
              let d1=new Date(ponudee[i].datumOd)
              let d2=new Date(ponudee[i].datumDo)
              if (((d1>=datummojod)&&(d1<=datummojdo))||((d2>=datummojod)&&(d2<=datummojdo))){
                this.ponudaServis.AzurirajsvePonudusavremenom(this.nekretnina.id,"cekanje","odbijeno",ponudee[i].datumDo,ponudee[i].datumOd)
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

  Odbij(){
    
    this.ponudaServis.AzurirajPonudu(this.nekretnina.id, "cekanje", this.korisnik, "odbijeno",0).subscribe(resp => {
        if (resp['poruka'] == 'ok') {
          window.location.reload();
        }
        else {
  
        }
      
    })

  }




}
