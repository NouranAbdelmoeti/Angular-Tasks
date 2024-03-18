import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';



@Injectable({
  providedIn: 'root'
})
//I didn't add categories 
export class ProductServiceService {
  private ProductList: IProduct[] = [
  ];
  constructor() { }

  getProductById(id: number | undefined): IProduct | undefined {
    if (!id) return undefined;
    const product = this.ProductList.find((product) => product.id == id);
    if (product) return product;
    return;
  }
  deleteProduct(id: number) {}

}
