import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Blokirani } from '../models/blokirani';
import { Inbox } from '../models/indbox';
import { Nekretnina } from '../models/nekretnine';
import { Ponuda } from '../models/ponuda';
import { Pregledinekretnina } from '../models/pregledinekretnina';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';
import { PreglediService } from '../pregledi.service';

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiranServis: BlokiraniService,
    private pregledServis: PreglediService) { }

  ngOnInit(): void {
    this.nesto = this.ruta.snapshot.paramMap.get('nekretnina')
    this.nekretninaServis.dohvatiNekretninuSaId(parseInt(this.nesto)).subscribe((nek: Nekretnina) => {
      this.nekretnina = nek
      this.nekretnina.slikazaprikaz =
        this.nekretnina.galerija[Math.floor(Math.random() * nek.galerija.length)];
      if (this.nekretnina.prodaja) this.nekretnina.tekstprodaje = "Prodaje se"
      else this.nekretnina.tekstprodaje = "Izdaje se"
      if (this.nekretnina.kucailistan == "stan") {
        let x = " sobe";
        if (this.nekretnina.brojsoba == 1) x = " soba"
        this.nekretnina.kucaspratnost = "Stan sa " +
          this.nekretnina.brojsoba + x + " kvadrature " + this.nekretnina.kvadratura
      } else {
        this.nekretnina.kucaspratnost = "Kuca kvadrature " + this.nekretnina.kvadratura
      }
      let x = this.nekretnina.slikazaprikaz
      const newObj: any = x;
      this.prikaz = newObj.slika

      let kor = JSON.parse(localStorage.getItem("ulogovan")).korisnickoime
      let danasnjidatumstring = new Date().toISOString().slice(0, 10)
      this.pregledServis.dohvatiPreglede(this.nekretnina.id).subscribe((pregledi: Pregledinekretnina[]) => {
        this.brojprikaza = pregledi.length
        this.pregledServis.daLiJeVideo(this.nekretnina.id, kor, danasnjidatumstring).subscribe((pr: Pregledinekretnina[]) => {
          if (pr.length == 0) {
            this.pregledServis.dodajNekretninu(this.nekretnina.id, kor, danasnjidatumstring).subscribe(resp => {
              if (resp['poruka'] == 'ok') {
                this.brojprikaza++
              }
              else {

              }
            })
          }
        })
      })


    })
    this.zelimkontakt = false;



  }


  brojprikaza: number
  nekretnina: Nekretnina
  nesto: string
  placanje: string
  cena: number
  ucesce: number
  datumod: Date
  datumdo: Date
  zelimkontakt: boolean
  text: string
  textarea: string
  poruka: string
  prikaz: string
  porukazaporuku: string

  onChange($event) {
    if (this.placanje == 'Gotovina') this.cena = this.nekretnina.cena
    else {
      this.cena = this.nekretnina.cena * 1.2
      this.ucesce = this.nekretnina.cena * 0.2
    }
  }

  Kupi() {

    let korisnickoime1 = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime
    let korisnickoime2 = this.nekretnina.vlasnik
    this.blokiranServis.daLiSuBlokirani(korisnickoime1, korisnickoime2).subscribe((podatak: Blokirani[]) => {
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
    this.blokiranServis.daLiSuBlokirani(korisnickoime1, korisnickoime2).subscribe((podatak: Blokirani[]) => {
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
                  this.text = "Zeleo bih da iznajmim ovu nekretninu"//
                  this.zelimkontakt = false;//
                  this.PosaljiPoruku()//
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

  ZelimDaKontaktiram() {
    this.zelimkontakt = true
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
