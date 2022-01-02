import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DataTableDsRow, DS } from 'src/app/models/data-table';
import { DashbordService } from 'src/app/services/dashbord.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dashSrv: DashbordService) { }

  monthslabs = moment.monthsShort();
  yearlab: String = "Année";
  totalAllTime: DS = new DS;
  dataTable: DataTableDsRow[] = [];
  activityMonthsSub: Subscription | undefined;

  ngOnInit(): void {

    this.getData();
  }

  getData() {

    for (let index = 0; index < 5; index++) {
      let newRow = new DataTableDsRow;
      newRow.year = 2018 + index;
      for (let index = 0; index < 12; index++) {
        let newDs = new DS;
        newDs.source = 2000 + index;
        newDs.depense = 1000 + index;
        newRow.mds.push(newDs);
        newRow.total.depense += newDs.depense;
        newRow.total.source += newDs.source;
      }

      this.dataTable.push(newRow);
      this.totalAllTime.depense += newRow.total.depense;
      this.totalAllTime.source += newRow.total.source;

    }

    this.activityMonthsSub = this.dashSrv
      .getActivitiesMonths()
      .subscribe(
        (data: DataTableDsRow[]) => {
          this.dataTable = data;
          this.totalAllTime.depense = 0;
          this.totalAllTime.source = 0;
          for (let index = 0; index < this.dataTable.length; index++) {
            this.totalAllTime.depense += this.dataTable[index].total.depense;
            this.totalAllTime.source += this.dataTable[index].total.source;
          }
        }
      );

  }

}
