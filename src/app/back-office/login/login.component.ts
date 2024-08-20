import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message: string = 'Vous êtes déconnecté.';
  username!: string;
  password!: string;
  auth!: AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.username, this.password)
      .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn) {
        this.router.navigate(['admin/users']);
      } else {
        this.password = '';
        this.router.navigate(['admin/login']);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté.';
  }
}
