import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SigninModel } from '@app/core/models/signin/signin.model';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.apiUrl = environment.apis.apiUrl;
  }

  loginUser(signin: SigninModel): Observable<any> {
    return this.http.post<Response>(this.apiUrl.concat('/auth'), signin).pipe(
      map((response: any) => {
        if (response && response.success && response.data) {
          this.tokenService.setToken(response.data);
        }
        return response;
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
  }

  isLoggedIn(): boolean {
    return this.tokenService.getToken() !== null && !this.tokenService.isTokenExpired();
  }

  getUserInfo(): any {
    return this.tokenService.getUserInfo();
  }

  // getCurrentRole(): string | null {
  //   return this.tokenService.getRole();
  // }
}
