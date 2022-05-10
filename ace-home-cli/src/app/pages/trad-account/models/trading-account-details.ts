export class TradAccountDetails {
    id: number;
    name: String;
    code: String;
    active: Boolean;
    type: String;
    site: String;
    sauthor: String;
    sname: String;
    ssite: String;
    sold: number;

    constructor() {
        this.id = 0;
        this.name = "name";
        this.code = "code";
        this.active = true;
        this.type = "type";
        this.site = "site";
        this.sauthor = "sauthor";
        this.sname = "sname";
        this.ssite = "ssite";
        this.sold = 0;
    }
}

