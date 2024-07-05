import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Response } from '@app/core/models/response-model/response.model';
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LogService {
  urlApi!: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.apis.apiUrl;
  }

  getLogs() {
    return this.http.get<Response>(this.urlApi.concat('/logs/get_all_logs')).pipe(
      map((data) => {
        return data;
      })
    );
  }

  clearLogs() {
    return this.http.post<Response>(this.urlApi.concat('/logs/clear_logs'), {}).pipe(
      map((data) => {
        return data.success;
      })
    )
  }
}
