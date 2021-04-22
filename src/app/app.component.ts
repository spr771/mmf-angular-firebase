import { ItemService } from './services/item.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseauthService } from './services/firebaseauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isSignedIn=false
  constructor(public fba:FirebaseauthService,public router:Router,public db:ItemService) { }

  ngOnInit(): void {
    console.log(this.db.findprofile('TeSu1tBTfSuSR5Ya3nTk'))
    this.fba.localdataupdata()
   if(this.fba.isLoggedin==true){
     this.isSignedIn=true;

   }
   else{
     this.isSignedIn=false
   }
  }
  async onlogout(){
    await this.fba.logout()
    this.isSignedIn=false
    window.location.reload()
  }
}
