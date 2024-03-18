import { Component, inject, OnInit  } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../products/products.component';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule, ProductsComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: IProduct[] = [];
  cartService = inject(CartService);
  constructor(private cartServiceO: CartService) { }
  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
}
deleteFromCart(item:IProduct){
this.cartService.delete(item);
}



}
