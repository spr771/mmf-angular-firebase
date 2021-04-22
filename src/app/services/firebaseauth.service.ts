import{AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  isLoggedin=false
  constructor(public firebase:AngularFireAuth) { }
  async login(email:string,password:string){
  await this.firebase.signInWithEmailAndPassword(email,password).then(res=>{
    this.isLoggedin=true;
    localStorage.setItem('userdata',JSON.stringify(res.user))
  })
  }
  async logout(){
    await this.firebase.signOut()
    localStorage.removeItem('userdata')
    this.isLoggedin=false
  }
  async signup(email:string,password:string){
    await this.firebase.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedin=true;
      localStorage.setItem('userdata',JSON.stringify(res.user))
    })
  }
  localdataupdata(){
    if(localStorage.getItem('userdata')!=null){
      this.isLoggedin=true
    }
  }
}
