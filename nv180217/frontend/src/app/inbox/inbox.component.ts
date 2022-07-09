import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArhiviraniService } from '../arhivirani.service';
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Arhivirani } from '../models/arhivirani';
import { Blokirani } from '../models/blokirani';
import { Inbox } from '../models/indbox';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiraniServis: BlokiraniService,
    private arhiviraniServis: ArhiviraniService, private blokiranServis: BlokiraniService) { }


  ngOnInit(): void {
    this.prikaziarhivirane = false;
    let kor = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    this.inboxServis.dohvatiPonudeZaKorisnike(kor).subscribe((inb: Inbox[]) => {
      let pom1 = inb
      this.sve = inb;
      let pom2: Inbox[] = []
      let pom3: Inbox[] = []
      this.blokiraniServis.dohvatiBlokiraneSaJednim(kor).subscribe((blok: Blokirani[]) => {
        this.arhiviraniServis.dohvatiSveArhivirane(kor).subscribe((arh: Arhivirani[]) => {
          let i = 0;
          for (let x = 0; x < pom1.length; x++) {
            let dalijeblkiran = false;
            for (let y = 0; y < blok.length; y++) {
              if (((pom1[x].korisnickoime1 == blok[y].korisnickoime1) && (pom1[x].korisnickoime2 == blok[y].korisnickoime2))
                || ((pom1[x].korisnickoime2 == blok[y].korisnickoime1) && (pom1[x].korisnickoime1 == blok[y].korisnickoime2))) {
                pom1[x].arhivirana = false
                dalijeblkiran = true
              }
            }
            for (let y = 0; y < arh.length; y++) {
              if (arh[y].id == pom1[x].id) {
                pom1[x].arhivirana = true;
                dalijeblkiran = true
              }
            }
            if (dalijeblkiran == false) {
              pom2.push(pom1[x]);
            }
            else {
              pom3.push(pom1[x]);
            }

          }

          this.inbox = pom2
          this.arhiviranoiblokirano = pom3

          for (let i = 0; i < this.inbox.length; i++) {
            this.inbox[i].poslednjidatum = this.inbox[i].konverzacija[this.inbox[i].konverzacija.length - 1].vreme.slice(0, 19)
            this.inbox[i].poslednjevreme = new Date(this.inbox[i].poslednjidatum)
            this.inbox[i].poslednjidatum = this.inbox[i].poslednjidatum.slice(8, 10) + "." + this.inbox[i].poslednjidatum.slice(5, 7) + "." +
              this.inbox[i].poslednjidatum.slice(0, 4) + "  " + this.inbox[i].poslednjidatum.slice(11, 13) + ":" +
              this.inbox[i].poslednjidatum.slice(14, 16) + ":" + this.inbox[i].poslednjidatum.slice(17, 19)
            this.inbox[i].porukaprocitana = true;
            for (let j = 0; j < this.inbox[i].konverzacija.length; j++) {
              if ((!this.inbox[i].konverzacija[j].procitano) && (this.inbox[i].konverzacija[j].posiljalac != kor))
                this.inbox[i].porukaprocitana = false
            }
          }
          this.inbox.sort((a, b) => { return -a.poslednjevreme.getTime() + b.poslednjevreme.getTime() })
          //
          for (let i = 0; i < inb.length; i++) {
            this.arhiviranoiblokirano[i].poslednjidatum = inb[i].konverzacija[inb[i].konverzacija.length - 1].vreme.slice(0, 19)
            this.arhiviranoiblokirano[i].poslednjevreme = new Date(this.arhiviranoiblokirano[i].poslednjidatum)
            this.arhiviranoiblokirano[i].poslednjidatum = this.arhiviranoiblokirano[i].poslednjidatum.slice(8, 10) + "." + this.arhiviranoiblokirano[i].poslednjidatum.slice(5, 7) + "." +
              this.arhiviranoiblokirano[i].poslednjidatum.slice(0, 4) + "  " + this.arhiviranoiblokirano[i].poslednjidatum.slice(11, 13) + ":" +
              this.arhiviranoiblokirano[i].poslednjidatum.slice(14, 16) + ":" + this.arhiviranoiblokirano[i].poslednjidatum.slice(17, 19)
            this.arhiviranoiblokirano[i].porukaprocitana = true;
          }
          this.arhiviranoiblokirano.sort((a, b) => { return -a.poslednjevreme.getTime() + b.poslednjevreme.getTime() })



        })
      })
    })
    this.zelimdaposaljemporuku=false

  }


  inbox: Inbox[]
  sve: Inbox[]
  arhiviranoiblokirano: Inbox[]
  prikaziarhivirane: boolean
  zelimdaposaljemporuku: boolean

  naslovceta:string

  nekretnine: Nekretnina[]
  nekretnina: Nekretnina
  Izabrananekretnina:string
  porukazaporuku:string
  text:string
  textarea:string

  Arhiviraj(id) {
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    this.arhiviraniServis.dodajArhivu(korisnickoime1, id).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })

  }

  PrikaziArhivu() {
    this.prikaziarhivirane = true;
  }

  Odarhiviraj(id){
    
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    this.arhiviraniServis.odArhiviraj(korisnickoime1, id).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })

  }

  PosaljiPorukuu() {

    if (this.zelimdaposaljemporuku==false){
      this.zelimdaposaljemporuku=true
      this.Izabrananekretnina=""
      this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((nek:Nekretnina[])=>{
        this.nekretnine=nek
      })
    }else{
      for (let i=0;i<this.nekretnine.length;i++){
        if (this.nekretnine[i].naziv==this.naslovceta){
          this.nekretnina=this.nekretnine[i]
        }
      }

      this.PosaljiPorukuOmotac()

    }


  }


  PosaljiPorukuOmotac() {
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2 = this.nekretnina.vlasnik
    this.blokiranServis.daLiSuBlokirani(korisnickoime1, korisnickoime2).subscribe((podatak: Blokirani[]) => {
      if (podatak.length != 0)
        this.porukazaporuku = "Nije moguce poslati poruku"
      else {
        this.text = this.textarea
        this.PosaljiPoruku()
      }
    })
  }

  PosaljiPoruku() {
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2 = this.nekretnina.vlasnik
    let konverzacija = []
    let danas = new Date()
    let poruka = {
      text: this.text,
      posiljalac: korisnickoime1,
      vreme: danas,
      procitano: false
    }

    this.inboxServis.dohvatiPonudeZaKorisnikeInekretninu(korisnickoime1, this.nekretnina.id).subscribe((inbox: Inbox) => {
      if (!inbox) {
        konverzacija.push(poruka)
        this.inboxServis.dodajPoruku
          (korisnickoime1, korisnickoime2, -1, this.nekretnina.naziv, konverzacija, this.nekretnina.id).
          subscribe(resp => {
            if (resp['poruka'] == 'ok') {
              this.porukazaporuku = "Uspesno poslata poruka"
            }
            else {
              this.porukazaporuku = 'Neuspesno poslata poruka'
            }
          })
      }
      else {
        this.inboxServis.dodajPorukuUKonverzaciju(inbox.id, this.text, korisnickoime1, danas, false).subscribe(resp => {
          if (resp['poruka'] == 'ok') {
            this.porukazaporuku = "Uspesno poslata poruka"
          }
          else {
            this.porukazaporuku = 'Neuspesno poslata poruka'
          }
        })
      }
    })
  }


}
