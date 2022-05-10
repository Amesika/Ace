export class TradAccountState {

    action: String;
    type: String;
    sold: number;

    constructor() {
        this.action = "action";
        this.type = "type";
        this.sold = 0;
    }

    updateSold(){
        if(this.type == 'depense' && this.sold > 0)
            this.sold = this.sold *  -1 ;
    }
}


export class TradState {

    title: string;
    devise: string;
    arrayTradAccountState: TradAccountState[];

    
    constructor() {
        this.title = "title";
        this.arrayTradAccountState = [];
        this.devise = "";
    }

}

