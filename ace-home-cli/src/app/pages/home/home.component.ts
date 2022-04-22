import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DataTableDsRow, DS } from 'src/app/models/data-table';
import { DashbordService } from 'src/app/services/dashbord.service';
import { DebtService } from 'src/app/services/debt.service';
import { CardDash } from 'src/app/shared/model/card-dash';
import { Bank } from '../bank/models/bank';
import { BankService } from '../bank/services/bank.service';
import { TradService } from '../trad-account/services/trad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dashSrv: DashbordService,
    private debtSrv: DebtService,
    private bankSrv: BankService,
    private tradSrv: TradService) {
    this.cdBank = new CardDash;
    this.cdBank.title = "Total des avoirs en banques"
    this.cdDebt = new CardDash;
    this.cdDebt.title = "Total des dêttes"
    this.cdTrad = new CardDash;
    this.cdTrad.title = "Total des avoirs des comptes de trading"
  }

  cdBank: CardDash;
  cdDebt: CardDash;
  cdTrad: CardDash;

  monthslabs = moment.monthsShort();
  yearlab: String = "Année";
  totalAllTime: DS = new DS;
  dataTable: DataTableDsRow[] = [];
  activityMonthsSub: Subscription | undefined;

  ngOnInit(): void {

    this.getData();
    this.getTotalBank();
    this.getTotalDebt();
    this.getTotalTrad();
  }

  getData() {

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

  getTotalTrad() {
    this.tradSrv.getTotalSold().subscribe((data) => {
      this.cdTrad.amount = data;
    })
  }

}
