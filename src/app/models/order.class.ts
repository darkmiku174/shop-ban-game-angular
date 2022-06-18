export class Order {
    public paid_at: Date;
    public cancelled_at: Date;
    public status: string;
    constructor(
        paid_at: Date,
        cancelled_at: Date,
        status: string,
    ) {
        this.paid_at = paid_at;
        this.cancelled_at = cancelled_at;
        this.status=status;
    }
}