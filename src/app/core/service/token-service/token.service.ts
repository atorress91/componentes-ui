import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  sub: string;
  roleId: string;
  name: string;
  lastName: string;
  userId: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private decodedToken: DecodedToken | null = null;

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.decodeToken(token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
    this.decodedToken = null;
  }

  decodeToken(token: string): void {
    try {
      this.decodedToken = jwtDecode<DecodedToken>(token);
    } catch (Error) {
      this.decodedToken = null;
    }
  }

  getDecodedToken(): DecodedToken | null {
    return this.decodedToken;
  }

  getRole(): string | null {
    return this.decodedToken ? this.decodedToken.roleId : null;
  }

  getUserInfo(): { name: string, lastName: string, email: string, userId: string } | null {
    if (!this.decodedToken) return null;
    return {
      name: this.decodedToken.name,
      lastName: this.decodedToken.lastName,
      email: this.decodedToken.sub,
      userId: this.decodedToken.userId
    };
  }

  isTokenExpired(): boolean {
    if (!this.decodedToken) return true;
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(this.decodedToken.exp);
    return expirationDate.valueOf() <= new Date().valueOf();
  }
}
