import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { ApiAdminService } from '../../services/api-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  adminList: Admin[] = [];

  constructor(private apiAdminService: ApiAdminService) {}

  ngOnInit() {
    this.apiAdminService.getAdminInfo().subscribe((data: Admin[]) => {
      this.adminList = data;
    });
  }
}
