import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private items: IProduct[] = [];
  constructor() { }

  AddToCart(product: IProduct){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }
  delete(item:IProduct){
    this.items = this.items.filter((i) => i.id !== item.id)
  }

  getTotal(){
    return this.items.reduce((acc,item) => {
      return acc + item.price + item.quantity;
    }, 0);
  }
}
