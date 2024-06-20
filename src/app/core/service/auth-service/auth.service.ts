import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

import { SigninModel } from '@app/core/models/signin/signin.model';
import { Response } from '@app/core/models/response-model/response.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserAffiliateSubject!: BehaviorSubject<any>;
  private currentUserAdminSubject!: BehaviorSubject<any>;
  private userRole: string = 'client';
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = '';
  }

  getRole(): string {
    return this.userRole;
  }

  setRole(role: string): void {
    this.userRole = role;
  }

  loginUser(userCredentials: SigninModel) {
    return this.http
      .post<Response>(
        this.urlApi.concat('/auth/login'),
        userCredentials
      )
      .pipe(
        map((response: Response) => {
          if (response.success) {
            this.valiteUserType(response);
          }
          return response;
        })
      );
  }

  valiteUserType(response: Response) {
    let isUserAffiliate = response.data.is_affiliate;
    if (isUserAffiliate) {
      this.setUserAffiliateValue(response.data);
    } else {
      this.setUserAdminValue(response.data);
    }
  }

  public setUserAffiliateValue(user: any) {
    localStorage.setItem('currentUserAffiliate', JSON.stringify(user));
    this.currentUserAffiliateSubject.next(user);
  }

  public setUserAdminValue(user: any) {
    localStorage.setItem('currentUserAdmin', JSON.stringify(user));
    this.currentUserAdminSubject.next(user);
  }
}
