import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private ruter: Router, private korisnikservis: KorisnikService) { }

  ngOnInit(): void {
  }

  korisnickoime: string
  lozinka: string
  poruka: string


  PrijaviSe() {

    this.korisnikservis.prijava(this.korisnickoime, this.lozinka).subscribe((korisnik: Korisnik) => {
      if (korisnik) {
        if (korisnik.status == 'prihvacen') {
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          if (korisnik.tip == 'admin') {
            this.ruter.navigate(['admin']);
          }
          else {
            if (korisnik.tip == 'registrovankorisnik') {
              this.ruter.navigate(['registrovankorisnik'])
            } else {
              this.ruter.navigate(['radnik']);
            }
          }
        }
        else {
          if (korisnik.status == 'odbijen') {
            this.poruka = 'Greska vas nalog je odbijen od strane admina'
          } else {
            this.poruka = 'Greska vas nalog jos uvek nije prihvacen od strane admina'
          }
        }
      }
      else {
        this.poruka = 'Greska neispravno uneti podaci';
      }
    })


  }


}
