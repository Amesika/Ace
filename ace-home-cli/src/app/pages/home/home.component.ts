import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DataTableDsRow, DS } from 'src/app/models/data-table';
import { DashbordService } from 'src/app/services/dashbord.service';
import { DebtService } from 'src/app/services/debt.service';
import { CardDash } from 'src/app/shared/model/card-dash';
import { Bank } from '../bank/models/bank';
import { BankService } from '../bank/services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dashSrv: DashbordService,
    private debtSrv: DebtService,
    private bankSrv: BankService) {
    this.cdBank = new CardDash;
    this.cdBank.title = "Total des avoirs en banques"
    this.cdDebt = new CardDash;
    this.cdDebt.title = "Total des dêttes"
  }

  cdBank: CardDash;
  cdDebt: CardDash;

  monthslabs = moment.monthsShort();
  yearlab: String = "Année";
  totalAllTime: DS = new DS;
  dataTable: DataTableDsRow[] = [];
  activityMonthsSub: Subscription | undefined;

  ngOnInit(): void {

    this.getData();
    this.getTotalBank();
    this.getTotalDebt();
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

  getTotalDebt() {
    this.debtSrv.getBalance().subscribe((data) => {
      this.cdDebt.amount = data;
    })
  }

  getTotalBank() {
    this.bankSrv.getTotalSold().subscribe((data) => {
      this.cdBank.amount = data;
    })
  }

}
