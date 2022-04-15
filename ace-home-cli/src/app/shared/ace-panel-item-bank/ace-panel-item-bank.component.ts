import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankSold } from 'src/app/pages/bank/models/bank-sold';

@Component({
  selector: 'app-ace-panel-item-bank',
  templateUrl: './ace-panel-item-bank.component.html',
  styleUrls: ['./ace-panel-item-bank.component.css']
})
export class AcePanelItemBankComponent implements OnInit {

  @Input()
  bank: BankSold;

  constructor(public router: Router) {
    this.bank = new BankSold;
  }  

  ngOnInit(): void {
  }

  getItemDetails() {
    this.router.navigate(['bank/details'], { state: this.bank });
  }

}
