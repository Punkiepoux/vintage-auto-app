import { Component } from '@angular/core';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  adminList: Admin[] = [];
}
