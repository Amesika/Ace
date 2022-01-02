import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataTableDsRow, DS } from 'src/app/models/data-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  monthslabs = moment.monthsShort();
  yearlab: String = "Année";
  totalAllTime: DS = new DS; 
  dataTable: DataTableDsRow[] = [];

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      let newRow  = new DataTableDsRow;
      newRow.yearlab = String(2018+index);
      for (let index = 0; index < 12; index++) {
        let newDs  = new DS;
        newDs.source = 2000+index;
        newDs.depense = 1000+index;
        newRow.months.push(newDs);
        newRow.total.depense += newDs.depense;
        newRow.total.source += newDs.source;
      }
     
      this.dataTable.push(newRow);
      this.totalAllTime.depense += newRow.total.depense;
      this.totalAllTime.source += newRow.total.source;
      
    }
  }

}
