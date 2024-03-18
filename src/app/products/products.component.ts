import { Component, inject } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  clientName: string = 'Ali';
  imgSrc="assets/storelogo.jpg";
cartService = inject(CartService);
  constructor() {}

  /*
  buyProduct(item: IProduct) {
    item.quantity--;
    console.log("added!");
  }
  */
  AddToCart(item: IProduct){
  this.cartService.AddToCart(item);  
  item.quantity--;

  }

  ProductList: IProduct[] = [{
    id:1,
    name: "Casio Watch",
    price: 1500,
    image: "assets/9a515ecfd71857f3dd20ded0cc805bab.jpg",
    description: "A high end watch with ....",
    quantity: 6

  }
, {
  id:2,
  name: "Casio Watch",
  price: 2590,
  image: "assets/8fdbaeabab224302470632acc6f4a9c5.jpg",
  description: "A high end watch with ....",
  quantity: 0

},
  {
    id:3,
  name: "Casio Watch",
  price: 3000,
  image: "assets/39f8ae9e99055592605661111e5918bd.jpg",
  description: "A high end watch with ....",
  quantity: 2

  } , 
  {
    id:4,
  name: "Casio Watch",
  price: 1250,
  image: "assets/867b743b0cfad52f99b969c16ce44f4f.jpg",
  description: "A high end watch with ....",
  quantity: 20

  }, 
  {
    id:5,
  name: "Casio Watch",
  price: 1490,
  image: "assets/13817cdabc64395bf4e0a42c5c8e9473.jpg",
  description: "A high end watch with ....",
  quantity: 5

  }, 
  {
    id:6,
  name: "Casio Watch",
  price: 1280,
  image: "assets/c0ec9ffa26bba76360fc201f0d473fb7.jpg",
  description: "A high end watch with ....",
  quantity: 5

  }, 
  {
    id:7,
  name: "Casio Watch",
  price: 2199,
  image: "assets/f16ed531d227b1b1e34023dbff677dfd.jpg",
  description: "A high end watch with ....",
  quantity: 5
  },
  
  {
    id:8,
  name: "Casio Watch",
  price: 3999,
  image: "assets/e545ffdfc607e09351e6c663a0d9a8ad.jpg",
  description: "A high end watch with ....",
  quantity: 1,
  }
  , 
  {
    id:9,
  name: "Casio Watch",
  price: 2000,
  image: "assets/f8dde4806fd0ae242a9cd2eb752fbfb4.jpg",
  description: "A high end watch with ....",
  quantity: 3
  }
  
  ]}






