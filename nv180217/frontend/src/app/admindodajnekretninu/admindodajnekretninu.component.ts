import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-admindodajnekretninu',
  templateUrl: './admindodajnekretninu.component.html',
  styleUrls: ['./admindodajnekretninu.component.css']
})
export class AdmindodajnekretninuComponent implements OnInit {

  constructor(private ruter: Router, private nekretninaServis: NekretninaService) { }

  ngOnInit(): void {
  }


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
        parseInt(this.brojsoba),this.namesten,galerija,this.prodaja,parseInt(this.cena),"agencija",false,-1,"odobrena").subscribe(resp => {
          if (resp['poruka'] == 'ok') {
            this.poruka='Uspesno je dodata nekretnina'
          }
          else {
            this.poruka='Neupseno poslat zahtev za nekretninu'
          }
        })


  }


}
