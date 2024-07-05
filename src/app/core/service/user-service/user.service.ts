import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '@app/core/models/user/user.model';
import { environment } from 'src/environments/environment';
import { Response } from '@app/core/models/response-model/response.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private urlApi: string;

  constructor(private router: Router, private http: HttpClient) {
    this.urlApi = environment.apis.apiUrl;
  }

  createUser(user: User) {
    return this.http.post<Response>(this.urlApi.concat('/user'), user).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getAllUsers(){
    return this.http.get<Response>(this.urlApi.concat('/user/get_all_users')).pipe(
      map((data)=>{
        return data;
      })
    )
  }
}
