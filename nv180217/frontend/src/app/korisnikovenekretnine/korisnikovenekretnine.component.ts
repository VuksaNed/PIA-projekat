import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-korisnikovenekretnine',
  templateUrl: './korisnikovenekretnine.component.html',
  styleUrls: ['./korisnikovenekretnine.component.css']
})
export class KorisnikovenekretnineComponent implements OnInit {

  constructor(private ruter: Router, private nekretninaServis: NekretninaService) { }


  ngOnInit(): void {

    
    let kor = JSON.parse(localStorage.getItem('ulogovan'));

    this.nekretninaServis.dohvatiNekretninuSaVlasnikom(kor.korisnickoime).subscribe((podaci: Nekretnina[]) => {
      this.nekretnine = podaci;
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
  naziv: string
  grad:string
  opstina: string
  ulica: string
  kucailistan: string
  brojspratova: string
  sprat: string
  kvadratura: string
  brojsoba:string
  namesten: boolean
  prodaja: boolean
  cena: string
  poruka: string

  UbaciNovuNekretninu(){
    
    let kor = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime;

    let galerija = []
    let fileinput=(<HTMLInputElement>document.getElementById("videoslike"));
      let file=fileinput.files;
      for(let i=0;i<file.length;i++){
        let elem=file.item(i).name;
        let podatak={
          slika: elem
        }
        galerija.push(podatak);
      }

      this.nekretninaServis.dodajNekretninu(this.naziv,this.grad,this.opstina,this.ulica,this.kucailistan,
        parseInt(this.brojspratova),parseInt(this.sprat),parseInt(this.kvadratura),
        parseInt(this.brojsoba),this.namesten,galerija,this.prodaja,parseInt(this.cena),kor,false,-1,"cekanje").subscribe(resp => {
          if (resp['poruka'] == 'ok') {
            this.poruka='Uspesno je poslat zahtev za nekretninu'
          }
          else {
            this.poruka='Neupseno poslat zahtev za nekretninu'
          }
        })


  }

}
