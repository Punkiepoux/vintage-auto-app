import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['admin/login']);
  }
}
