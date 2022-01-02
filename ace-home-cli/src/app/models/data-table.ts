export class DataTableDsRow {
    yearlab: String;
    months: DS[];
    total: DS;

    constructor() {
        this.yearlab = "";
        this.months = [];
        this.total = new DS;
    }
}

// Dépenses et sources
export class DS{
    source: number;
    depense:number;

    constructor() {
        this.source = 0;
        this.depense = 0;
    }
}