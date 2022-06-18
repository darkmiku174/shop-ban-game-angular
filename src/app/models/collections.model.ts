import { Product } from "./products.model"
export class Collection {
  public _id: any;
  public name: string;
  public list_game: Product[];
  constructor(name: string, list_game: Product[]) {
    this.name = name;
    this.list_game = list_game
  }
}
