import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private role: string = '';

  constructor() { }

  decodeToken(token: string) {
    const decoded = jwtDecode<any>(token);
    this.role = decoded.RolId;
    return this.role;
  }

  getRole() {
    return this.role;
  }

  hasRole(expectedRole: string): boolean {
    return this.role === expectedRole;
  }
}
