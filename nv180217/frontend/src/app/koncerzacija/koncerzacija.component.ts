import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Blokirani } from '../models/blokirani';
import { Inbox } from '../models/indbox';
import { Nekretnina } from '../models/nekretnine';
import { Ponuda } from '../models/ponuda';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';

@Component({
  selector: 'app-koncerzacija',
  templateUrl: './koncerzacija.component.html',
  styleUrls: ['./koncerzacija.component.css']
})
export class KoncerzacijaComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiraniServis: BlokiraniService) { }

  ngOnInit(): void {
    this.nesto = this.ruta.snapshot.paramMap.get('konverzacija')
    let kor = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime

    this.inboxServis.dohvatiInboxSaIdom(parseInt(this.nesto)).subscribe((inbox: Inbox) => {
      this.konverzacija = inbox;

      for (let i = 0; i < inbox.konverzacija.length; i++) {
        if (this.konverzacija.konverzacija[i].posiljalac != kor) this.konverzacija.konverzacija[i].procitano = true;
        let x = inbox.konverzacija[i].vreme.slice(0, 19)
        this.konverzacija.konverzacija[i].vremeuformatuzaispit = x.slice(8, 10) + "." + x.slice(5, 7) + "." +
          x.slice(0, 4) + "  " + x.slice(11, 13) + ":" +
          x.slice(14, 16) + ":" + x.slice(17, 19) + "  "
        this.konverzacija.konverzacija[i].posiljalaczaispit = this.konverzacija.konverzacija[i].posiljalac
        this.nekretninaServis.dohvatiNekretninuSaId(this.konverzacija.nekretina).subscribe((nek: Nekretnina) => {

          if ((this.konverzacija.konverzacija[i].posiljalac == 'agencija') || (this.konverzacija.konverzacija[i].posiljalac == nek.vlasnik))
            this.konverzacija.konverzacija[i].posiljalaczaispit = 'vlasnik'



          this.blokiraniServis.daLiSuBlokirani(this.konverzacija.korisnickoime1, this.konverzacija.korisnickoime2).subscribe((blok: Blokirani[]) => {
            if (blok.length != 0) {
              this.blokiran = 1
              let kor = JSON.parse(localStorage.getItem("ulogovan")).korisnickoime
              if (blok[0].korisnickoime2 == kor)
                this.blokiran = 2
            } else {
              this.blokiran = 0;
            }

          })

        })

        this.inboxServis.azurirajCitanje(this.konverzacija.konverzacija, this.konverzacija.id).subscribe(resp => {
          if (resp['poruka'] == 'ok') {

          }
          else {

          }
        })


        this.nekretninaServis.dohvatiNekretninuSaId(this.konverzacija.nekretina).subscribe((nek: Nekretnina) => {
          this.nekretnina = nek
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
            this.prodaj = nek.prodaja
            this.prihvatiiliposalji = false;
          }
        })


      }




    })
  }


  blokiran: number
  ponuda: Ponuda
  nesto: string
  konverzacija: Inbox
  text: string
  porukazaporuku: string
  prihvatiiliposalji: boolean
  dalitrebadaimaprihvatiodbij: boolean
  prodaj: boolean =true
  nekretnina: Nekretnina
  korisnik: string

  placanje: string
  cena: number
  ucesce: number
  datumod: Date
  datumdo: Date
  zelimkontakt: boolean
  textarea: string
  poruka: string
  prikaz: string

  Blokiraj() {
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2
    if (this.konverzacija.korisnickoime1 == korisnickoime1) {
      korisnickoime2 = this.konverzacija.korisnickoime2
    }
    else {
      korisnickoime2 = this.konverzacija.korisnickoime1
    }
    this.blokiraniServis.dodajBlok(korisnickoime1, korisnickoime2).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.ruter.navigate(['inbox'])
      }
      else {

      }
    })
  }

  Odblokiraj() {
    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2
    if (this.konverzacija.korisnickoime1 == korisnickoime1) {
      korisnickoime2 = this.konverzacija.korisnickoime2
    }
    else {
      korisnickoime2 = this.konverzacija.korisnickoime1
    }
    this.blokiraniServis.odBlokiraj(korisnickoime1, korisnickoime2).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.ruter.navigate(['inbox'])
      }
      else {

      }
    })
  }


  PosaljiPoruku() {

    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let danas = new Date()
    this.inboxServis.dodajPorukuUKonverzaciju(this.konverzacija.id, this.text, korisnickoime1, danas, false).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })
  }

  onChange($event) {
    if (this.placanje == 'Gotovina') this.cena = this.nekretnina.cena
    else {
      this.cena = this.nekretnina.cena * 1.2
      this.ucesce = this.nekretnina.cena * 0.2
    }
  }

  Prihvati() {

    this.ponudaServis.AzurirajPonudu(this.nekretnina.id, "cekanje", this.korisnik, "dogovoreno",0).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })

  }

  Odbij() {

    this.ponudaServis.AzurirajPonudu(this.nekretnina.id, "cekanje", this.korisnik, "odbijeno",0).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        window.location.reload();
      }
      else {

      }
    })

  }


  ////

  Kupi() {

    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2 = this.nekretnina.vlasnik
    this.blokiraniServis.daLiSuBlokirani(korisnickoime1, korisnickoime2).subscribe((podatak: Blokirani[]) => {
      if (podatak.length != 0)
        this.poruka = "Nije moguce poslati ponudu za ovu nekretninu"
      else {
        this.ponudaServis.dohvatiPonuduSaIdIStatusom(this.nekretnina.id, "prihvaceno").subscribe((podaci: Nekretnina[]) => {
          if (podaci.length == 0) {
            this.ponudaServis.
              dodajPonudu(this.nekretnina.id, "", "", JSON.parse(localStorage.getItem('ulogovan')).korisnickoime, this.cena, "cekanje").
              subscribe(resp => {
                if (resp['poruka'] == 'ok') {
                  this.text = "Zeleo bih da kupim ovu nekretninu"
                  this.zelimkontakt = false;
                  this.PosaljiPoruku()
                  this.poruka = "Uspesno poslata ponuda"
                }
                else {
                  this.poruka = 'Neuspesno poslata ponuda'
                }
              })
          }
          else {
            this.poruka = "Za ovu nekretninu nije moguce poslati ponudu"
          }
        })
      }
    })



  }


  Izdaj() {


    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2 = this.nekretnina.vlasnik
    this.blokiraniServis.daLiSuBlokirani(korisnickoime1, korisnickoime2).subscribe((podatak: Blokirani[]) => {
      if (podatak.length != 0)
        this.poruka = "Nije moguce poslati ponudu za ovu nekretninu"
      else {
        this.ponudaServis.dohvatiPonuduSaIdIStatusom(this.nekretnina.id, "prihvaceno").subscribe((podaci: Ponuda[]) => {
          if (podaci.length == 0) {
            let x1 = new Date(this.datumod).toISOString().slice(0, 10)
            let x2 = new Date(this.datumdo).toISOString().slice(0, 10)
            let cenazaslanje = this.nekretnina.cena * ((new Date(this.datumdo).getTime() - new Date(this.datumod).getTime()) / (1000 * 3600 * 24))
            this.ponudaServis.
              dodajPonudu(this.nekretnina.id, x1, x2, JSON.parse(localStorage.getItem('ulogovan')).korisnickoime, cenazaslanje, "cekanje").
              subscribe(resp => {
                if (resp['poruka'] == 'ok') {
                  this.poruka = "Uspesno poslata ponuda za izdavanje"
                  this.text = "Zeleo bih da iznajmim ovu nekretninu"
                  this.zelimkontakt = false;
                  this.PosaljiPoruku()
                  return
                }
                else {
                  this.poruka = 'Neuspesno poslata ponuda za izdavanje'
                  return
                }
              })
          }
          else {
            this.ponudaServis.dohvatiPonuduSaIdIStatusom(this.nekretnina.id, "prihvaceno").subscribe((podacii: Ponuda[]) => {
              for (let i = 0; i < podacii.length; i++) {
                let d1 = new Date(podacii[i].datumOd)
                let d2 = new Date(podacii[i].datumDo)
                if ((((d1 <= new Date(this.datumod)) && (d2 >= new Date(this.datumod))) || ((d1 <= new Date(this.datumdo)) && (d2 >= new Date(this.datumdo))))) {
                  this.poruka = "Za ovu nekretninu nije moguce poslati ponudu za izdavanje"
                  return
                }
                let x1 = new Date(this.datumod).toISOString().slice(0, 10)
                let x2 = new Date(this.datumdo).toISOString().slice(0, 10)
                let cenazaslanje = this.nekretnina.cena * ((new Date(this.datumdo).getTime() - new Date(this.datumod).getTime()) / (1000 * 3600 * 24))
                this.ponudaServis.
                  dodajPonudu(this.nekretnina.id, x1, x2, JSON.parse(localStorage.getItem('ulogovan')).korisnickoime, cenazaslanje, "cekanje").
                  subscribe(resp => {
                    if (resp['poruka'] == 'ok') {
                      this.poruka = "Uspesno poslata ponuda za izdavanje"
                      this.text = "Zeleo bih da iznajmim ovu nekretninu"
                      this.zelimkontakt = false;
                      this.PosaljiPoruku()
                      return
                    }
                    else {
                      this.poruka = 'Neuspesno poslata ponuda za izdavanje'
                      return
                    }
                  })
              }
            })
          }
        })

      }

    })


  }


}
