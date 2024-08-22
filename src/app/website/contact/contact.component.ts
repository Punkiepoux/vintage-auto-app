import { Component, OnInit } from '@angular/core';
import { ApiContactService } from '../../services/api-club.service';
import { Contact } from './contact';
import { CONTACTS } from './mock-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contact: Contact = CONTACTS;

  constructor(private apiContactService: ApiContactService) {}

  ngOnInit() {
    this.apiContactService.getClubInfo().subscribe((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        this.contact = data[0];
      }
    });
  }

}
