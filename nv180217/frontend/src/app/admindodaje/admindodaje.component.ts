import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-admindodaje',
  templateUrl: './admindodaje.component.html',
  styleUrls: ['./admindodaje.component.css']
})
export class AdmindodajeComponent implements OnInit {

  constructor(private ruter: Router, private korisnikservis: KorisnikService) { }


  ngOnInit(): void {
  }

  poruka: string
  porukaa: string
  ime: string
  prezime: string
  korisnickoime: string
  lozinka: string
  potvrdalozinke: string
  slika: string
  adresaeposte: string
  grad: string
  drzava: string
  tip: string



  
  RegistrujSe() {
    let status = 'prihvacen'

    if ((!this.ime) || (!this.prezime) || (!this.korisnickoime) || (!this.lozinka) || (!this.potvrdalozinke)
       || (!this.adresaeposte) || (!this.grad) || (!this.drzava) ||(!this.tip))  {
      this.poruka='Morate uneti sve podatke';
      return;
    }

    if ((this.ime.length == 0) || (this.prezime.length == 0) || (this.korisnickoime.length == 0) || (this.lozinka.length == 0) ||
      (this.adresaeposte.length == 0) || (this.grad.length == 0) || (this.drzava.length == 0)) {
      this.poruka='Morate uneti sve podatke';
      return;
    }

    const pattern1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/

    if (!pattern1.test(this.lozinka)){
      this.poruka='Lozinka mora imati barem jedno veliko i malo slovo, barem jedan broj i specijalni karakter i mora imati izmedju 8 i 24 karaktera';
      return;
    }

    const pattern2=/(.)\1\1\1/

    if (pattern2.test(this.lozinka)){
      this.poruka='Lozinka ne sme imati vise od tri uzastopna karaktera';
      return;
    }

    if (this.lozinka != this.potvrdalozinke) {
      this.poruka='Lozinke se ne poklapaju';
      return;
    }

    this.korisnikservis.dohvatiKorisnikaSaKorimenom(this.korisnickoime).subscribe((korisnik: Korisnik) => {
      if (korisnik) {
        this.poruka='Vec postoji korisnik sa tim korisnickim imenom';
        return;
      } else {

        this.korisnikservis.dohvatiKorisnikaSaAdresom(this.adresaeposte).subscribe((korisnik: Korisnik) => {
          if (korisnik) {
            this.poruka='Vec postoji korisnik sa tom adresom elektronske poste';
            return;
          } else {
            if (!this.slika){
              this.slika='avatar.png'
            }else{
              this.slika=this.slika.substr(12,this.slika.length);   
            }
            this.korisnikservis.registrujSe(this.ime, this.prezime, this.korisnickoime, this.lozinka,
              this.slika, this.adresaeposte, this.grad, this.drzava, this.tip, status).subscribe(resp => {
                if (resp['message'] == 'ok') {
                  this.porukaa='Uspesno je dodat korisnik'
                }
                else {
                  this.poruka='NOT OK'
                }
              })
          }
        })
      }
    })


  }





}
