import { Injectable } from '@angular/core';
import {food} from '../../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getAll():food[]{
  return[
    {
      id:1,
      name :'Vegitable Pizza',
      price :9,
      cooktime :'40-50',
      favorite :false,
      origin :['italy'],
      stars :4.0,
      imageUrl :'E:/hebbiz work/mff/mmf-angular-firebase/src/assets/foods/food 1.jpg',
      tags :['Fastfood','Pizza','Lunch'],
    },
    {
      id:2,
      name :'Pasta',
      price :9,
      cooktime :'40-50',
      favorite :false,
      origin :['italy'],
      stars :4.0,
      imageUrl :'E:/hebbiz work/mff/mmf-angular-firebase/src/assets/foods/food 2.jpg',
      tags :['Fastfood','Pizza','Lunch'],
    },
    {
      id:1,
      name :'Alu Vaja',
      price :9,
      cooktime :'40-50',
      favorite :false,
      origin :['italy'],
      stars :4.0,
      imageUrl :'E:/hebbiz work/mff/mmf-angular-firebase/src/assets/foods/food 3.jpg',
      tags :['Fastfood','Pizza','Lunch'],
    },
    {
      id:1,
      name :'Macher Jhol',
      price :9,
      cooktime :'40-50',
      favorite :false,
      origin :['italy'],
      stars :4.0,
      imageUrl :'E:/hebbiz work/mff/mmf-angular-firebase/src/assets/foods/food 4.jpg',
      tags :['Fastfood','Pizza','Lunch'],
    },
  ]
}
  
}
