import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = `${environment.API_URL}\\configurations` ;

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }

  setAccounts(): Observable<string> {
    return this.http.post<string>(this.apiUrl, null);
  }

}
