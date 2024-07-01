import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent implements OnInit {
  @Input() stats: { users: number, sales: number, products: number } = { users: 0, sales: 0, products: 0 };
  @Input() users: { id: number, name: string, email: string }[] = [];
  @Input() products: { id: number, name: string, price: number, stock: number }[] = [];

  ngOnInit(): void {
    this.stats = { users: 100, sales: 5000, products: 200 }
    this.users = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
      { id: 3, name: 'User 3', email: 'user3@example.com' }
    ];
    this.products = [
      { id: 1, name: 'Product 1', price: 100, stock: 50 },
      { id: 2, name: 'Product 2', price: 150, stock: 30 }
    ];
  }
}

