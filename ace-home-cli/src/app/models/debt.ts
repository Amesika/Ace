export class Debt{
    id:number;
    name:String;
    description:String;
    creditorName:String;
    initAmount:number;
    currentAmount:number;
    paymentAmount:number;
    rate:number;

    constructor(){
        this.id=0;
        this.name="";
        this.description="";
        this.creditorName="";
        this.initAmount=0;
        this.currentAmount=0;
        this.paymentAmount=0;
        this.rate=0;
    }
}