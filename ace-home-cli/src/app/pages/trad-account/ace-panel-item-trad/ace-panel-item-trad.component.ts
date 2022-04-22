import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradAccountSold } from '../models/trading-account';

@Component({
  selector: 'app-ace-panel-item-trad',
  templateUrl: './ace-panel-item-trad.component.html',
  styleUrls: ['./ace-panel-item-trad.component.css']
})
export class AcePanelItemTradComponent implements OnInit {

  @Input()
  trad: TradAccountSold;

  styleOption : Boolean = false;

  constructor(public router: Router) {
    this.trad = new TradAccountSold;
  }  

  ngOnInit(): void {
  }

  getItemDetails() {
    this.router.navigate(['trading/details'], { state: this.trad });
  }

  getActive(){
    return  this.trad.active+"";
  }

}
