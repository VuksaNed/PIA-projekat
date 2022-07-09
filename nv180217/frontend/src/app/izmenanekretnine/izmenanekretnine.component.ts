import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-izmenanekretnine',
  templateUrl: './izmenanekretnine.component.html',
  styleUrls: ['./izmenanekretnine.component.css']
})
export class IzmenanekretnineComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService) { }

  ngOnInit(): void {
    let idnek = this.ruta.snapshot.paramMap.get('nekretnina')
    this.nekretninaServis.dohvatiNekretninuSaId(parseInt(idnek)).subscribe((podaci: Nekretnina) => {
      this.nekretnina = podaci
      this.naziv = podaci.naziv
      this.grad = podaci.grad
      this.opstina = podaci.opstina
      this.ulica = podaci.ulica
      this.kucailistan = podaci.kucailistan
      this.brojspratova = "" + podaci.brojspratova
      this.sprat = "" + podaci.sprat
      this.kvadratura = "" + podaci.kvadratura
      this.brojsoba = "" + podaci.brojsoba
      this.namesten = podaci.namesten
      this.prodaja = podaci.prodaja
      this.cena = "" + podaci.cena

    })

  }


  nekretnina: Nekretnina
  naziv: string
  grad: string
  opstina: string
  ulica: string
  kucailistan: string
  brojspratova: string
  sprat: string
  kvadratura: string
  brojsoba: string
  namesten: boolean
  prodaja: boolean
  cena: string
  poruka: string

  UbaciNovuNekretninu() {

    let kor = JSON.parse(localStorage.getItem('ulogovan')).korisnickoime;

    let galerija = []
    let fileinput = (<HTMLInputElement>document.getElementById("videoslike"));
    let file = fileinput.files;
    for (let i = 0; i < file.length; i++) {
      let elem = file.item(i).name;
      let podatak = {
        slika: elem
      }
      galerija.push(podatak);
    }
    if (galerija.length == 0)
      galerija = this.nekretnina.galerija

    this.nekretninaServis.AzurirajPodatke(this.naziv,this.grad,this.opstina,this.ulica,this.kucailistan,parseInt(this.brojspratova),
    parseInt(this.sprat),parseInt(this.kvadratura),parseInt(this.brojsoba),this.namesten,galerija,this.prodaja,parseInt(this.cena),this.nekretnina.id)
    .subscribe(resp => {
      if (resp['poruka'] == 'ok') {
        this.ruter.navigate(['korisniknekrenina'])
      }
      else {
        this.poruka='Neuspesno azuriranje'
      }
    })


  }

}
