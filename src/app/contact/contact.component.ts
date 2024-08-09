import { Component } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact: Contact = CONTACTS[0];
}
