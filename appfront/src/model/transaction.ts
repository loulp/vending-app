export class transaction {
  choice: string;
  price: number;
  sugar: boolean;
  state: string;

  constructor(choice: string, price: number, sugar: boolean, state: string) {
    this.choice = choice;
    this.price = price;
    this.sugar = sugar;
    this.state = state;
  }
}
