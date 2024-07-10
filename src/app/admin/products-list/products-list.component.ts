import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  @Input() products: { id: number, name: string, price: number, stock: number }[] = [];

  productColumns = [
    { name: 'ID', prop: 'id', sortable: true },
    { name: 'Nombre', prop: 'name', sortable: true },
    { name: 'Precio', prop: 'price', sortable: true },
    { name: 'Stock', prop: 'stock', sortable: true }
  ];

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, stock: 50 },
      { id: 2, name: 'Product 2', price: 150, stock: 30 }
    ];
  }
}
