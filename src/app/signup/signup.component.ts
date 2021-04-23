import { FirebaseauthService } from './../services/firebaseauth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  constructor(public fba:FirebaseauthService,public router:Router,public db:ItemService){}
  async onsignup(firstname:string,lastname:string,email:string,password:string){
   await this.fba.signup(email,password)
   await this.db.createprofile(JSON.parse(localStorage.getItem('userdata')??'').uid,firstname,lastname,email)
   await this.router.navigate(["home"])
    window.location.reload()
  }
}
