export class DataTableDsRow {
    year: number;
    mds: DS[];
    total: DS;

    constructor() {
        this.year = 0;
        this.mds = [];
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