import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private ruter: Router){}

  canActivate(){
    let kor = JSON.parse(localStorage.getItem('ulogovan'))

    if (!kor){
      this.ruter.navigate(["pocetna"])
      return false
    }

    if (kor.tip=="admin"){
      return true;
    }else{
      this.ruter.navigate(["pocetna"])
      return false
    }
  }
  
}
