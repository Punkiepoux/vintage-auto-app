export class Partners {
  id: number;
  name: string;
  lien: string;
  logo: string;
  description: string;

  constructor (
    id: number,
    name: string,
    lien: string,
    logo: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.lien = lien;
    this.logo = logo;
    this.description = description;
  }
}
