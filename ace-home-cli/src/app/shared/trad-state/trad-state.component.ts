import { Component, Input, OnInit } from '@angular/core';
import { TradAccountState, TradState } from '../../pages/trad-account/models/trading-account-state';
import { TradService } from '../../pages/trad-account/services/trad.service';

@Component({
  selector: 'app-trad-state',
  templateUrl: './trad-state.component.html',
  styleUrls: ['./trad-state.component.css']
})
export class TradStateComponent implements OnInit {

  @Input()
  tradState = new TradState;

  constructor(private tradSrv: TradService) { 

  }

  ngOnInit(): void {
    this.tradState.title = "Les statistiques de trading";
  }

}
