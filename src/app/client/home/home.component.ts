import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  featuredProducts = [
    { name: 'Producto 1', price: 19.99, image: 'assets/images/nfts/01.jpg' },
    { name: 'Producto 2', price: 29.99, image: 'assets/images/nfts/02.jpg' },
    { name: 'Producto 3', price: 39.99, image: 'assets/images/nfts/03.jpg' },
    { name: 'Producto 4', price: 49.99, image: 'assets/images/nfts/04.jpg' }
  ];
}
