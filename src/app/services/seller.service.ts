import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  issellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    let result = this.http.post('http://localhost:3000/seller',
      data,
      { observe: 'response' }
    ).subscribe((result) => {
      this.issellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home']);

    });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.issellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    console.warn(data)
    // API call code will be there
  }
}
