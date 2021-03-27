import { Item } from './../models/item';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection!: AngularFirestoreCollection<Item>;
  items!: Observable<any[]>;
  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection('store_new').valueChanges();
  }
  getItems(){
    return this.items;
  }
}

