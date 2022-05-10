import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DataTableDsRow, DS } from 'src/app/models/data-table';
import { DashbordService } from 'src/app/services/dashbord.service';
import { DebtService } from 'src/app/services/debt.service';
import { CardDash } from 'src/app/shared/model/card-dash';
import { Bank } from '../bank/models/bank';
import { BankService } from '../bank/services/bank.service';
import { TradAccountState, TradState } from '../trad-account/models/trading-account-state';
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
    this.cdBank.devise = "EUR";
    this.cdDebt = new CardDash;
    this.cdDebt.title = "Total des dêttes"
    this.cdDebt.devise = "EUR";
    this.cdTrad = new CardDash;
    this.cdTrad.title = "Total des avoirs des comptes de trading"
    this.cdTrad.devise = "USD";
    this.tradState = new TradState;
    this.tradState.devise = "USD";
    this.initAtacs();
  }

  cdBank: CardDash;
  cdDebt: CardDash;
  cdTrad: CardDash;
  tradState : TradState;

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
    this.getStates();
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

  updateAtacs(trad: TradAccountState[]) {

    return this.tradState.arrayTradAccountState.map((tr) => {
      let itemUpdate = trad.find(item => item.action == tr.action);
      if (itemUpdate) {
        tr = itemUpdate;
        if (tr.type == 'depense' && tr.sold > 0)
          tr.sold = tr.sold * - 1;
      }
      return tr;
    });
  }

  getStates() {
    this.tradSrv.getTradinAccState()
      .subscribe(
        (states) => {
          this.tradState.arrayTradAccountState = this.updateAtacs(states);
        }
      )
  }

  initAtacs() {
    let actions =
      [
        'GAIN',
        'INVESTISSEMENT',
        'PERTE',
        'TRANSFERT_IN',
        'TRANSFERT_OUT'
      ]

    this.tradState.arrayTradAccountState = new Array;
    actions.forEach(action => {
      let trad = new TradAccountState;
      trad.action = action;
      this.tradState.arrayTradAccountState.push(trad);
    });
    this.tradState.title = "Les statistiques de trading";
  }


}
