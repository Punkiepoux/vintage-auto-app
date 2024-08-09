export class partners {
  id: number;
  name: string;
  lien: string;
  picture: string;
  description: string;

  constructor (
    id: number,
    name: string,
    lien: string,
    picture: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.lien = lien;
    this.picture = picture;
    this.description = description;
  }
}
