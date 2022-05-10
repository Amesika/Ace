import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { CardDash } from 'src/app/shared/model/card-dash';
import { TradAccountSold } from '../models/trading-account';
import { TradAccountState, TradState } from '../models/trading-account-state';
import { TradService } from '../services/trad.service';
import { TradStateComponent } from '../../../shared/trad-state/trad-state.component';

@Component({
  selector: 'app-trad-details',
  templateUrl: './trad-details.component.html',
  styleUrls: ['./trad-details.component.css']
})
export class TradDetailsComponent implements OnDestroy, OnInit {

  activities: Activity[] = [];
  tradinAcc!: TradAccountSold;
  arrayTradinAccState: TradAccountState[] = [];
  cdTrad: CardDash = new CardDash;
  tradState : TradState = new TradState;

  title: string = "";

  dtOptions: DataTables.Settings = {};
  persons: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private tradSrv: TradService, private router: Router) {

    this.initAtacs();
  }

  ngOnInit(): void {
    this.tradinAcc = history.state;

    if (!this.tradinAcc.id) {
      this.router.navigate(['trading']);
    }

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.getActivities();
    this.getTrad();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getActivities() {
    this.tradSrv.getTradinAccActivities(this.tradinAcc.id)
      .subscribe(
        (activities) => {
          this.activities = activities
        }
      )

    this.tradSrv.getTradinAccStateById(this.tradinAcc.id)
      .subscribe(
        (states) => {
          this.updateAtacs(states);
          this.tradState.arrayTradAccountState = this.arrayTradinAccState;
        }
      )
  }

  updateAtacs(trad: TradAccountState[]) {

    this.arrayTradinAccState = this.arrayTradinAccState.map((tr) => {
      let itemUpdate = trad.find(item => item.action == tr.action);
      if (itemUpdate) {
        tr = itemUpdate;
        if (tr.type == 'depense' && tr.sold > 0)
          tr.sold = tr.sold * - 1;
      }
      return tr;
    });
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

    this.arrayTradinAccState = new Array;
    actions.forEach(action => {
      let trad = new TradAccountState;
      trad.action = action;
      this.arrayTradinAccState.push(trad);
    });
    this.tradState.title = "Les statistiques de trading";
    this.tradState.devise = "USD";
  }

  getTrad() {
      this.cdTrad.amount = this.tradinAcc.sold;
      this.cdTrad.devise = 'USD';
      this.cdTrad.title = this.tradinAcc.name + " : " + this.tradinAcc.sname  + " - " + this.tradinAcc.sauthor;
  }
}