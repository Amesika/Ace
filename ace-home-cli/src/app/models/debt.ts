export class Debt {
    id: number;
    name: String;
    description: String;
    creditorName: String;
    initAmount: number;
    currentAmount: number;
    paymentAmount: number;
    rate: number;

    constructor(
        name?: String,
        description?: String,
        creditorName?: String, initAmount?: number, currentAmount?: number, paymentAmount?: number, rate?: number) {
        this.id = 0;
        name != undefined ?this.name = name: this.name="";
        description != undefined ?this.description = description: this.description="";
        creditorName != undefined ?this.creditorName = creditorName: this.creditorName="";
        initAmount != undefined ?this.initAmount = initAmount: this.initAmount=0;
        currentAmount != undefined ?this.currentAmount = currentAmount: this.currentAmount=0;
        paymentAmount != undefined ?this.paymentAmount = paymentAmount: this.paymentAmount=0;
        rate != undefined ?this.rate = rate: this.rate=0;
    }
}