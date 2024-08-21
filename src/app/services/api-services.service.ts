import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getServicesInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }
}
