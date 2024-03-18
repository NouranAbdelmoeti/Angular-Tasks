import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
imgSrc="assets/storelogo.jpg";
clientName: string = '';
cartItemsVisible: boolean = false;
cartItems: any[] = [];

constructor(private cartService: CartService) { }


}
