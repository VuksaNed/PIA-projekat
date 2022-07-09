import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Procenti } from '../models/procenti';
import { ProcentiService } from '../procenti.service';

@Component({
  selector: 'app-adminpodesiprocenat',
  templateUrl: './adminpodesiprocenat.component.html',
  styleUrls: ['./adminpodesiprocenat.component.css']
})
export class AdminpodesiprocenatComponent implements OnInit {

  constructor(private ruter: Router,private procenatServis: ProcentiService) { }

  ngOnInit(): void {
    this.procenatServis.dohvatiProcente().subscribe((pro: Procenti) => {
      this.trenutniprocenti = pro
      this.prodaja=""+pro.prodaja
      this.iznajmljivanje=""+pro.iznajmljivanje
    })
  }


  trenutniprocenti: Procenti

  prodaja: string
  iznajmljivanje: string

  AzurirajProcente() {
    let prod=this.prodaja
    let izn=this.iznajmljivanje

    this.procenatServis.AzurirajsvePonudusavremenom(prod,izn).subscribe(resp => {
      if (resp['poruka'] == 'ok') {
          this.ruter.navigate(['admin'])
      }
      else {
        
      }
    })

  }


}
