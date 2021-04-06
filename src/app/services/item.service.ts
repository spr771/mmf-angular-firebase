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
  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection('store_new').valueChanges({idField:'id'});
  }
  getItems(){
    return this.items;
  }
  writeData(key: string,value:string){
    this.afs.collection('store_new').doc(key).update({'store_name':value});
  }
}

