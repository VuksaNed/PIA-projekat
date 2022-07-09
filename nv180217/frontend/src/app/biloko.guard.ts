import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BilokoGuard implements CanActivate {
  
  constructor(private ruter: Router){}

  canActivate(){
    let kor = JSON.parse(localStorage.getItem('ulogovan'))

    if (!kor){
      this.ruter.navigate(["pocetna"])
      return false
    }else{
      return true
    }
  }
  
}
