import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSignedIn=false
  username:any;
  constructor(public fba:FirebaseauthService) { }

  ngOnInit(): void {
    this.fba.localdataupdata()
   if(this.fba.isLoggedin==true){
     this.isSignedIn=true;
     this.username=JSON.parse(localStorage.getItem('userdata')??'')

   }
   else{
     this.isSignedIn=false
   }
  }

}
