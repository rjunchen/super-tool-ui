import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private apiUrl = `${environment.API_URL}/configurations` ;

  constructor(private http: HttpClient) { }

  getConfigurations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateConfigurations(): Observable<string> {
    return this.http.post<string>(this.apiUrl, null);
  }
}
