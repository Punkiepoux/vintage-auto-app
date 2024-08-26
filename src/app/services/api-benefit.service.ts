import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBenefitService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getBenefitInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  addBenefit(benefit: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/services`, benefit);
  }

}
