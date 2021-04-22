import { Item } from './../../models/item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  store_n!:string;
  items: any[]=[] ;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items =>{
      this.items=items;
    });
  }
  writeData(key:string,value:string,original_value:string){
    if(original_value!=value && value!=null && value!=''){
      this.itemService.writeData(key,value);
    }
  }
  update(input:any){
     this.store_n=input.target.value;
  }

}
