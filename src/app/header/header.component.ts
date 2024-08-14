import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  admin: boolean = false;

  constructor(private location: Location) {
    this.admin = this.getUrl();
  }

  getUrl(): boolean {
    const path = this.location.path();
    if (path.includes('/admin')) {
      return true;
    } else {
      return false;
    }
  }
}
