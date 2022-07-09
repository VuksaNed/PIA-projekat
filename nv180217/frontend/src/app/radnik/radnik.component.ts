import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js'
import { BlokiraniService } from '../blokirani.service';
import { InboxService } from '../inbox.service';
import { Nekretnina } from '../models/nekretnine';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';
import { PreglediService } from '../pregledi.service';


@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private ruter: Router, private nekretninaServis: NekretninaService,
    private ponudaServis: PonudaService, private inboxServis: InboxService, private blokiranServis: BlokiraniService,
    private pregledServis: PreglediService) { }

  ngOnInit(): void {
    Chart.register(...registerables);

    this.nekretninaServis.dohvatiSveNekretnine("odobrena").subscribe((nek: Nekretnina[]) => {

      let izdavana100 = 0
      let izdavana300 = 0
      let izdavana600 = 0
      let izdavana1000 = 0
      let izdavana1000vise = 0
      let prodaja20000 = 0
      let prodaja50000 = 0
      let prodaja100000 = 0
      let prodaja150000 = 0
      let prodaja150000vise = 0

      for (let i = 0; i < nek.length; i++) {
        if (!nek[i].prodaja) {
          if (nek[i].cena <= 100) {
            izdavana100++
          }
          else {
            if (nek[i].cena <= 300) {
              izdavana300++
            }
            else {
              if (nek[i].cena <= 600) {
                izdavana600++
              }
              else {
                if (nek[i].cena <= 1000) {
                  izdavana1000++
                }
                else {
                  izdavana1000vise++
                }
              }
            }
          }
        } else {
          if (nek[i].cena <= 20000) {
            prodaja20000++
          }
          else {
            if (nek[i].cena <= 50000) {
              prodaja50000++
            }
            else {
              if (nek[i].cena <= 100000) {
                prodaja100000++
              }
              else {
                if (nek[i].cena <= 150000) {
                  prodaja150000++
                }
                else {
                  prodaja150000vise++
                }
              }
            }
          }
        }
      }

      let stanoviprodaja = 0;
      let stanoviiznajmljivanje = 0
      let kuceprodaja = 0
      let kuceiznajmljivanje = 0

      for (let i = 0; i < nek.length; i++) {
        if (!nek[i].prodaja) {
          if (nek[i].kucailistan == "kuca") {
            kuceiznajmljivanje++
          }
          else {
            stanoviiznajmljivanje++
          }
        }
        else {
          if (nek[i].kucailistan == "kuca") {
            kuceprodaja++
          } else {
            stanoviprodaja++
          }
        }
      }

      let gradovi=[]
      let brojpogradovima=[]

      for (let i=0;i<nek.length;i++){
        let ima=false
        for (let j=0;j<gradovi.length;j++){
          if (gradovi[j]==nek[i].grad){
            ima=true
            brojpogradovima[j]++
          }
        }

        if (ima==false){
          gradovi.push(nek[i].grad)
          brojpogradovima.push(1)
        }

      }





      var prvi = new Chart("prvi", {
        type: 'bar',
        data: {
          labels: ['cena<=100', '100<cena<=300', '300<cena<=600', '600<cena<=1000', '1000<cena'],
          datasets: [{
            label: 'Broj nekretnina u odredjenom cenovnom rangu za izdavanje',
            data: [izdavana100, izdavana300, izdavana600, izdavana1000, izdavana1000vise],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      var drugi = new Chart("drugi", {
        type: 'bar',
        data: {
          labels: ['cena<=20000', '20000<cena<=50000', '50000<cena<=100000', '100000<cena<=150000', '150000<cena'],
          datasets: [{
            label: 'Broj nekretnina u odredjenom cenovnom rangu za prodaju',
            data: [prodaja20000, prodaja50000, prodaja100000, prodaja150000, prodaja150000vise],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      var treci = new Chart("treci", {
        type: 'bar',
        data: {
          labels: ['kuce iznajmljivanje', 'kuce prodaja', 'stanovi iznajmljivanje', 'stanovi prodaja'],
          datasets: [{
            label: 'Broj kuca i stanova koji se iznajmljuju i prodaju',
            data: [kuceiznajmljivanje, kuceprodaja, stanoviiznajmljivanje, stanoviprodaja],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      var cetvrti = new Chart("cetvrti", {
        type: 'bar',
        data: {
          labels: gradovi,
          datasets: [{
            label: 'Nekretine po gradovima',
            data: brojpogradovima,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    })


  }

}
