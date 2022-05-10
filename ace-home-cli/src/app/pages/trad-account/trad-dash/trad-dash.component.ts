import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AcePanel } from 'src/app/shared/model/ace-panel';
import { DashHeader } from 'src/app/shared/model/dash-header';
import { TradService } from '../services/trad.service';

@Component({
  selector: 'app-trad-dash',
  templateUrl: './trad-dash.component.html',
  styleUrls: ['./trad-dash.component.css']
})
export class TradDashComponent implements OnInit {

  dashHeader!:DashHeader;
  acePanel!:AcePanel;
  option = 1;

  constructor(private tradSrv: TradService) {
    this.dashHeader = new DashHeader;
    this.acePanel = new AcePanel;
    this.acePanel.title = "Tous les comptes de trading";
    this.acePanel.devise = "USD";
    this.dashHeader.devise = "USD";
  }

  ngOnInit(): void {

    this.getTrads();
    this.dashHeader.title = "Total des avoirs comptes de trading au " + moment().format('Do MMMM YYYY');
  }

  getTrads() {

    this.tradSrv.getTradinAccWithSold().subscribe((trAccounts) => {
      this.acePanel.items = trAccounts;
    })

    this.tradSrv.getTotalSold().subscribe((sold) => {
      this.dashHeader.amount = sold;
      this.acePanel.subTitle = sold;
    })
  }

}
