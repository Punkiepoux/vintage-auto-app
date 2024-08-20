export class Service {
  id: number;
  title: string;
  description: string;
  cost: number;
  constructor(
    id: number,
    title: string,
    description: string,
    cost: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.cost = cost;
  }
}
