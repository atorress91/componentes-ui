import { Component } from '@angular/core';
import { RouteInfo } from './header.metadata';
import { ClientRoutes } from './client-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: RouteInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ClientRoutes;
  }
}
