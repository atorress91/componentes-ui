import { Injectable } from '@angular/core';

import { AdminRoutes } from '@app/layout/header/admin-items';
import { ClientRoutes } from '@app/layout/header/client-items';
import { RouteInfo } from '@app/layout/header/header.metadata';
import { TokenService } from '../token-service/token.service';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private tokenService: TokenService) { }

  getMenuItems(): RouteInfo[] {
    const role = this.tokenService.getRole();
    if (role === 'admin') {
      return AdminRoutes;
    }
    return ClientRoutes;
  }
}
