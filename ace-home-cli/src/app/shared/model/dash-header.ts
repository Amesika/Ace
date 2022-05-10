export class DashHeader {
    title!:string;
    amount!:number;
    devise!:string;

    constructor(){
        this.amount = 0;
        this.title = "Titre";
        this.devise = "EUR";
    }
}