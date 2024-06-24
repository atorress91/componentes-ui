import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleService } from '@app/core/service/role-service/role.service';
import { User } from '@app/core/models/user/user.model';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private urlApi: string = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient, private roleService: RoleService) {
    const storedUser = localStorage.getItem('currentUser');
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  loginUser(userCredentials: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}`, userCredentials)
      .pipe(map(response => {
        if (response && response.data && response.data.token) {
          const decodedToken = jwtDecode<any>(response.data.token);
          const userData: User = {
            name: decodedToken.Name,
            lastName: decodedToken.LastName,
            userId: decodedToken.UserId,
            roleId: decodedToken.RolId
          };

          localStorage.setItem('currentUser', JSON.stringify(userData));
          localStorage.setItem('token', response.data.token);
          this.currentUserSubject.next(userData);
        }
        return response;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
