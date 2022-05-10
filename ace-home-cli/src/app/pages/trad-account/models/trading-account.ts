export class TradAccountSold {
    id: number;
    name: string;
    code: string;
    active: Boolean;
    type: string;
    site: string;
    sauthor: string;
    sname: string;
    ssite: string;
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
