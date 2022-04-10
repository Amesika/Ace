import { Bank } from "../pages/bank/models/bank";

export class Activity {
    id: number;
    description: String;
    amount: number;
    note: String;
    _type: String;
    _date: String;
    bankDto!: Bank;

    constructor(description?: String, amount?: number, note?: String, _type?: String, bankDto?: Bank, _date?: String) {
        this.id = 0;
        description != undefined ? this.description = description : this.description = "";
        amount != undefined ? this.amount = amount : this.amount = 0;
        note != undefined ? this.note = note : this.note = "";
        _type != undefined ? this._type = _type : this._type = "";
        _date != undefined ? this._date = _date : this._date = "";
        bankDto != undefined ? this.bankDto = bankDto : this.bankDto = new Bank;
    }
}