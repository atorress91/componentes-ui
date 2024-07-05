import { Component } from '@angular/core';
import { RouteInfo } from './header.metadata';
import { ClientRoutes } from './client-items';
import { AdminRoutes } from './admin-items';
import { TokenService } from '@app/core/service/token-service/token.service';
import { AuthService } from '@app/core/service/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: RouteInfo[] = [];

  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadMenuItems();
  }


  loadMenuItems() {
    let roleId = this.tokenService.getRole();

    if (roleId == '1') {
      this.menuItems = ClientRoutes;
    } else {
      this.menuItems = AdminRoutes;
    }
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
