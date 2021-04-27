import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';
import {FoodService} from '../services/food/food.service';
import { ItemService } from '../services/item.service';
import {food} from '../shared/model/food'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSignedIn=false
  username:any;
  foods:any[]=[];

  constructor(public fba:FirebaseauthService,private stores:ItemService) { }

  ngOnInit(): void {
    this.stores.getItems().subscribe(items =>{
      this.foods=items;
    });

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
