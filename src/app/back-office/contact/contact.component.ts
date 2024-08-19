import { Component } from '@angular/core';
import { ApiContactService } from '../../services/api-club.service';
import { Contact } from '../../website/contact/contact';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class AdminContactComponent {
  constructor(private apiContactService: ApiContactService) {}

  contact: Contact = {
    name: '',
    address: '',
    email: '',
    phone: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  };

  jourList: string[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  dayList: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  ngOnInit() {
    this.loadContact();
  }

  loadContact(): void {
    this.apiContactService.getClubInfo().subscribe((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        this.contact = data[0];
      }
    });
  }

  onSubmitContact(contactForm: NgForm): void {
    console.log(contactForm.value);
    this.apiContactService.changeClubInfo(contactForm.value).subscribe((response: any) => {
      console.log(response);
      this.loadContact();
    });
  }

  onSubmitHoraire(horaireForm: NgForm): void {
    console.log(horaireForm.value);
    this.apiContactService.changeClubInfo(horaireForm.value).subscribe((response: any) => {
      console.log(response);
      this.loadContact();
    });
  }

}
