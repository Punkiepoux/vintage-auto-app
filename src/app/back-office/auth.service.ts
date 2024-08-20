import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  redirectUrl: string= '';

  login (username: string, password: string): Observable<boolean> {
    const isLoggedIn = (username === 'admin' && password === 'admin');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout () {
    this.isLoggedIn = false;
  }
}
