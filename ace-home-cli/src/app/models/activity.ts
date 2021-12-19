export class Activity{
    id:number;
    description:string;
    amount:number;
    note:string;
    _type:string;
    _date:string;

    constructor(){
        this.id=0;
        this.description="";
        this.amount=0;
        this.note="";
        this._type="";
        this._date="";
    }
}