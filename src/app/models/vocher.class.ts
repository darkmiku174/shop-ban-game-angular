import { Product } from "./products.class";

export class Vocher {
    public code: string;
    public discount: number;
    public list_game: Product[];
    public create_date: Date;
    public time_expired: Date;
    public status: boolean;
    constructor(
        code: string,
        discount: number,
        list_game: Product[],
        create_date: Date,
        time_expired: Date,
        status: boolean
    ) {
        this.code = code;
        this.discount = discount;
        this.list_game = list_game;
        this.create_date = create_date;
        this.time_expired = time_expired;
        this.status = status;
    }
}