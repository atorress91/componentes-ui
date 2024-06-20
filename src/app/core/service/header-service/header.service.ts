import { Injectable } from '@angular/core';

import { AdminRoutes } from '@app/layout/header/admin-items';
import { ClientRoutes } from '@app/layout/header/client-items';
import { AuthService } from '@app/core/service/auth-service/auth.service';
import { RouteInfo } from '@app/layout/header/header.metadata';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private authService: AuthService) { }

  getMenuItems(): RouteInfo[] {
    const role = this.authService.getRole();
    if (role === 'admin') {
      return AdminRoutes;
    }
    return ClientRoutes;
  }
}
