import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private ruter: Router, private nekretninaServis: NekretninaService) { }

  ngOnInit(): void {
    localStorage.clear()

    this.nekretninaServis.dohvatiPromovisaneNekretnine().subscribe((podaci: Nekretnina[]) => {
      this.promovisanenekretnine = podaci;
      for (let i = 0; i < podaci.length; i++) {
        this.promovisanenekretnine[i].slikazaprikaz =
          this.promovisanenekretnine[i].galerija[Math.floor(Math.random() * podaci[i].galerija.length)];
        if (this.promovisanenekretnine[i].prodaja) this.promovisanenekretnine[i].tekstprodaje = "Prodaje se"
        else this.promovisanenekretnine[i].tekstprodaje = "Izdaje se"
        if (this.promovisanenekretnine[i].kucailistan == "stan") {
          let x = " sobe";
          if (this.promovisanenekretnine[i].brojsoba == 1) x = " soba"
          this.promovisanenekretnine[i].kucaspratnost = "Stan sa " +
            this.promovisanenekretnine[i].brojsoba + x + " kvadrature " + this.promovisanenekretnine[i].kvadratura
        } else {
          this.promovisanenekretnine[i].kucaspratnost = "Kuca kvadrature " + this.promovisanenekretnine[i].kvadratura
        }
      }
    })

  }


  promovisanenekretnine: Nekretnina[];
  grad: string = ""
  mincena: string = ""
  maxcena: string = ""

  rezultatpretrage: Nekretnina[]


  Pretrazi() {

    if ((this.mincena == "") && (this.maxcena == "") && (this.grad == "")) return;

    let min = 0
    let max = 0
    let grad = this.grad

    if ((this.mincena == "") && (this.maxcena == "")) {
      this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((podaci: Nekretnina[]) => {
        min = podaci[0].cena
        max = podaci[0].cena
        for (let i = 0; i < podaci.length; i++) {
          if (min > podaci[i].cena) min = podaci[i].cena
          if (max < podaci[i].cena) max = podaci[i].cena
        }

        this.nekretninaServis.dohvatiNekretnineRezPretrage(grad, min, max,"odobrena").subscribe((podaciN: Nekretnina[]) => {
          this.rezultatpretrage = podaciN;

          for (let i = 0; i < podaciN.length; i++) {
            this.rezultatpretrage[i].slikazaprikaz =
              this.rezultatpretrage[i].galerija[Math.floor(Math.random() * podaciN[i].galerija.length)];
            if (this.rezultatpretrage[i].prodaja) this.rezultatpretrage[i].tekstprodaje = "Prodaje se"
            else this.rezultatpretrage[i].tekstprodaje = "Izdaje se"
            if (this.rezultatpretrage[i].kucailistan == "stan") {
              let x = " sobe";
              if (this.rezultatpretrage[i].brojsoba == 1) x = " soba"
              this.rezultatpretrage[i].kucaspratnost = "Stan sa " +
                this.rezultatpretrage[i].brojsoba + x + " kvadrature " + this.rezultatpretrage[i].kvadratura
            } else {
              this.rezultatpretrage[i].kucaspratnost = "Kuca kvadrature " + this.rezultatpretrage[i].kvadratura
            }
          }


        })

      })
    } else {
      if ((this.mincena == "")) {
        this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((podaci: Nekretnina[]) => {
          min = podaci[0].cena
          max = parseInt(this.maxcena)
          for (let i = 0; i < podaci.length; i++) {
            if (min > podaci[i].cena) min = podaci[i].cena
          }

          this.nekretninaServis.dohvatiNekretnineRezPretrage(grad, min, max,"odobrena").subscribe((podaciN: Nekretnina[]) => {
            this.rezultatpretrage = podaciN;

            for (let i = 0; i < podaciN.length; i++) {
              this.rezultatpretrage[i].slikazaprikaz =
                this.rezultatpretrage[i].galerija[Math.floor(Math.random() * podaciN[i].galerija.length)];
              if (this.rezultatpretrage[i].prodaja) this.rezultatpretrage[i].tekstprodaje = "Prodaje se"
              else this.rezultatpretrage[i].tekstprodaje = "Izdaje se"
              if (this.rezultatpretrage[i].kucailistan == "stan") {
                let x = " sobe";
                if (this.rezultatpretrage[i].brojsoba == 1) x = " soba"
                this.rezultatpretrage[i].kucaspratnost = "Stan sa " +
                  this.rezultatpretrage[i].brojsoba + x + " kvadrature " + this.rezultatpretrage[i].kvadratura
              } else {
                this.rezultatpretrage[i].kucaspratnost = "Kuca kvadrature " + this.rezultatpretrage[i].kvadratura
              }
            }


          })

        })
      }
      else {
        if ((this.maxcena == "")) {
          this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((podaci: Nekretnina[]) => {
            max = podaci[0].cena
            min = parseInt(this.mincena)
            for (let i = 0; i < podaci.length; i++) {
              if (max < podaci[i].cena) max = podaci[i].cena
            }

            this.nekretninaServis.dohvatiNekretnineRezPretrage(grad, min, max,"odobrena").subscribe((podaciN: Nekretnina[]) => {
              this.rezultatpretrage = podaciN;

            for (let i = 0; i < podaciN.length; i++) {
              this.rezultatpretrage[i].slikazaprikaz =
                this.rezultatpretrage[i].galerija[Math.floor(Math.random() * podaciN[i].galerija.length)];
              if (this.rezultatpretrage[i].prodaja) this.rezultatpretrage[i].tekstprodaje = "Prodaje se"
              else this.rezultatpretrage[i].tekstprodaje = "Izdaje se"
              if (this.rezultatpretrage[i].kucailistan == "stan") {
                let x = " sobe";
                if (this.rezultatpretrage[i].brojsoba == 1) x = " soba"
                this.rezultatpretrage[i].kucaspratnost = "Stan sa " +
                  this.rezultatpretrage[i].brojsoba + x + " kvadrature " + this.rezultatpretrage[i].kvadratura
              } else {
                this.rezultatpretrage[i].kucaspratnost = "Kuca kvadrature " + this.rezultatpretrage[i].kvadratura
              }
            }



            })

          })
        }
        else {
          min = parseInt(this.mincena)
          max = parseInt(this.maxcena)

          this.nekretninaServis.dohvatiNekretnineRezPretrage(grad, min, max,"odobrena").subscribe((podaciN: Nekretnina[]) => {
            this.rezultatpretrage = podaciN;

            for (let i = 0; i < podaciN.length; i++) {
              this.rezultatpretrage[i].slikazaprikaz =
                this.rezultatpretrage[i].galerija[Math.floor(Math.random() * podaciN[i].galerija.length)];
              if (this.rezultatpretrage[i].prodaja) this.rezultatpretrage[i].tekstprodaje = "Prodaje se"
              else this.rezultatpretrage[i].tekstprodaje = "Izdaje se"
              if (this.rezultatpretrage[i].kucailistan == "stan") {
                let x = " sobe";
                if (this.rezultatpretrage[i].brojsoba == 1) x = " soba"
                this.rezultatpretrage[i].kucaspratnost = "Stan sa " +
                  this.rezultatpretrage[i].brojsoba + x + " kvadrature " + this.rezultatpretrage[i].kvadratura
              } else {
                this.rezultatpretrage[i].kucaspratnost = "Kuca kvadrature " + this.rezultatpretrage[i].kvadratura
              }
            }


          })

        }
      }
    }

  }


}
