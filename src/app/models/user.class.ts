export class User {
    public first_name: string;
    public birthday: string;
    public last_name: string;
    public active: boolean;
    public email: string;
    public phone_number: string;
    public facebook_id: string;
    public google_id: string;
    public email_verification: boolean
    constructor(
        first_name: string,
        birthday: string,
        last_name: string,
        active: boolean,
        email: string,
        phone_number: string,
        facebook_id: string,
        google_id: string,
        email_verification: boolean
    ) {
        this.first_name=first_name;
        this.birthday=birthday;
        this.last_name=last_name;
        this.active=active;
        this.email=email;
        this.phone_number=phone_number;
        this.facebook_id=facebook_id;
        this.google_id=google_id;
        this.email_verification=email_verification;
    }
}