import { ApiLoginService } from './../services/api-login.service';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private expirationDuration = 900000;

  constructor(private apiLoginService: ApiLoginService) {
    this.loadLoginStatus();
  }

  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  private loadLoginStatus(): void {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const expiration = localStorage.getItem('expiration');

    if (storedIsLoggedIn === 'true' && expiration) {
      const now = new Date().getTime();
      if (now < Number(expiration)) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.clearLoginData();
      }
    } else {
      this.isLoggedIn = false;
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return this.apiLoginService.login(username, password).pipe(
        map(response => {
            const isLoggedIn = !!response.username;
            this.isLoggedIn = isLoggedIn;

            if (isLoggedIn) {
              this.setLoginData();
            }

            return isLoggedIn;
        }),
        catchError(() => {
            console.log('Erreur de connexion');
            this.isLoggedIn = false;
            this.clearLoginData();
            return of(false);
        })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.clearLoginData();
  }

  private setLoginData(): void {
    const expirationTime = new Date().getTime() + this.expirationDuration;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('expiration', expirationTime.toString());
  }

  private clearLoginData(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('expiration');
  }
}
