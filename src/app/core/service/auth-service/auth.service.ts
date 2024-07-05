import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SigninModel } from '@app/core/models/signin/signin.model';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token-service/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) {
    this.apiUrl = environment.apis.apiUrl;
  }

  loginUser(signin: SigninModel): Observable<any> {
    return this.http.post<Response>(this.apiUrl.concat('/auth'), signin).pipe(
      map((response: any) => {
        if (response && response.success && response.data) {
          console.log('Esto es lo que estoy enviando: ' + signin + 'esto es lo que estoy recibiendo del servidor: ' + response)
          this.tokenService.setToken(response.data);
        }
        console.log('Esto es lo que estoy enviando: ' + signin + 'esto es lo que estoy recibiendo del servidor: ' + response.data)
        return response;
      })
    );
  }

  logout(): Observable<boolean> {

    return this.http.post<any>(this.apiUrl.concat('/logout'), {}).pipe(
      map(() => {
        this.tokenService.removeToken();
        this.router.navigate(['/signin']);
        return true;
      }),
      catchError(() => {
        this.tokenService.removeToken();
        this.router.navigate(['/login']);
        return of(true);
      })
    );
  }
}
