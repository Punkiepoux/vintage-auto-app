export class Contact {
  name: string;
  address: string;
  email: string;
  phone: string;

  constructor(
    address: string,
    email: string,
    phone: string,
  ) {
    this.name = 'Vintage Auto 83';
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}
