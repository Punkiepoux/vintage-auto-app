import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-club.service';
import { Contact } from './contact';
import { CONTACTS } from './mock-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  contact: Contact | undefined;

  ngOnInit() {
    this.loadContact();
  }

  loadContact(): void {
    this.apiService.getClubInfo().subscribe((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        this.contact = data[0];
      }
      console.log(this.contact);
    });
  }
}
