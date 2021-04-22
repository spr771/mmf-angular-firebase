import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseauth:FirebaseauthService,public router:Router) { }

  ngOnInit(): void {
  }
  async onlogin(email:string,passowrd:string){
    await this.firebaseauth.login(email,passowrd)
    console.log('logged in ')
    await this.router.navigate(["home"])
    window.location.reload()

  }
}
