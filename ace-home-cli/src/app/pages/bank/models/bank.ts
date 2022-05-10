export class Bank {
    id!: number;
    name!: string;
    number!: string;
    description!: string;
    devise!:string; 

    constructor() {
        this.id = 0;
        this.name = "name";
        this.number = "number";
        this.description = "description";
        this.devise = "EUR";
    }
}
