import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "@app/core/service/user-service/user.service";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent implements OnInit {
  @Input() stats: { users: number, sales: number, products: number } = { users: 0, sales: 0, products: 0 };
  @Input() users: { userId: number, name: string, email: string }[] = [];
  @Input() products: { id: number, name: string, price: number, stock: number }[] = [];

  userColumns = [
    { name: 'ID', prop: 'userId', sortable: true },
    { name: 'Nombre', prop: 'name', sortable: true },
    { name: 'Correo', prop: 'email', sortable: true }
  ];
  productColumns = [
    { name: 'ID', prop: 'id', sortable: true },
    { name: 'Nombre', prop: 'name', sortable: true },
    { name: 'Precio', prop: 'price', sortable: true },
    { name: 'Stock', prop: 'stock', sortable: true }
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadAllUsers();
    this.stats = { users: 100, sales: 5000, products: 200 }
    this.products = [
      { id: 1, name: 'Product 1', price: 100, stock: 50 },
      { id: 2, name: 'Product 2', price: 150, stock: 30 }
    ];
  }

  loadAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: data => {
        if (data.success) {
          console.log(data)
          this.users = data.data;
        }
      }, error: error => {
        console.error(error);
      }
    })
  }
}

