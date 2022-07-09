import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-promenalozinke',
  templateUrl: './promenalozinke.component.html',
  styleUrls: ['./promenalozinke.component.css']
})
export class PromenalozinkeComponent implements OnInit {

  constructor(private ruter: Router, private korisnikservis: KorisnikService) { }

  ngOnInit(): void {
  }

  lozinka: string
  novalozinka: string
  potvrdanovalozinka: string
  poruka: string

  Promeni() {

    let kor = JSON.parse(localStorage.getItem('ulogovan'));

    if (kor.lozinka!=this.lozinka){
      this.poruka='Pogresno uneta stara lozinka'
      return;
    }

    const pattern1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/

    if (!pattern1.test(this.novalozinka)) {
      this.poruka='Lozinka mora imati barem jedno veliko i malo slovo, barem jedan broj i specijalni karakter i mora imati izmedju 8 i 24 karaktera';
      return;
    }

    const pattern2 = /(.)\1\1\1/

    if (pattern2.test(this.novalozinka)) {
      this.poruka='Lozinka ne sme imati vise od tri uzastopna karaktera';
      return;
    }

    if (this.novalozinka != this.potvrdanovalozinka) {
      this.poruka='Lozinke se ne poklapaju';
      return;
    }

    this.korisnikservis.promenaLozinke(kor.korisnickoime,this.novalozinka).subscribe(resp => {
      if (resp['message'] == 'ok') {
        localStorage.clear();
        this.ruter.navigate(['prijava'])
      }
      else {
        this.poruka='NOT OK'
      }
    })


  }


}
