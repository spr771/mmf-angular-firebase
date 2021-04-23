import { Item } from './../models/item';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument, QueryDocumentSnapshot, QuerySnapshot} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection!: AngularFirestoreCollection<Item>;
  items!: Observable<any[]>;
  profile:any
  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection('stores').valueChanges({idField:'id'});
  }
  getItems(){
    return this.items;
  }
  writeData(key: string,value:string){
    this.afs.collection('stores').doc(key).update({'store_name':value});
  }
  async createprofile(id:string,firstname:string,lastname:string,email:string){
    await this.afs.collection('users').doc(id).set({'firstname':firstname,'lastname':lastname,'email':email})
  }
  async findprofile(id:string){
     this.afs.collection('users').doc(id).get().subscribe(profile=>{
       this.profile=profile
     })
     return this.profile
  }
}

