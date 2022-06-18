import { Product } from "./products.class";

export class Collection {
    public name: string;
    list_game: Product[];
    constructor(
        name: string,
        list_game: Product[],
    ) {
        this.name = name;
        this.list_game = list_game;
    }
}