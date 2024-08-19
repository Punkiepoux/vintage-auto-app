import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getClubInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }

  addClubInfo(
    name: String,
    address: String,
    email: String,
    phone: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, {
      name,
      address,
      email,
      phone,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    });
  }

  changeClubInfo(data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/contact`, data);
  }
}
