export class Contact {
  name: string;
  address: string;
  email: string;
  phone: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  [key: string]: string;

  constructor(
    address: string,
    email: string,
    phone: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string
  ) {
    this.name = 'Vintage Auto 83';
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
    this.sunday = sunday;
  }
}
