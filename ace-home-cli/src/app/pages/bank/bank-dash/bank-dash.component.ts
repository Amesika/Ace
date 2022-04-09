import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/shared/balance/balance';
import { Bank } from '../models/bank';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank-dash',
  templateUrl: './bank-dash.component.html',
  styleUrls: ['./bank-dash.component.css']
})
export class BankDashComponent implements OnInit {

  balance: Balance = new Balance;

  banks: Bank[] = [];

  constructor(private bankSrv: BankService) {
    this.balance.title = "Solde de tous les banques";
    this.balance.modalId = "bank-dash";
    this.balance.modalId_ = "#bank-dash";
    this.balance.modalTitle = "";
    this.balance.modalOption = 0;
  }

  ngOnInit(): void {
    this.getBanks();
  }

  addBank() {
    console.log("addBank")
    this.balance.modalTitle = "Créer une banque"
    let bank = new Bank();
    this.balance.modalOption = 0;
    this.balance.selectData = bank;
  }

  handleDataEvent() {
    this.getBanks();
  }

  getBanks() {
    for (let index = 0; index < 5; index++) {
      let bank = new Bank
      bank.name = "Bank - " + index;
      bank.number = "" + index;
      this.banks.push(bank);
    }

    this.bankSrv.getBanks().subscribe((banks) => {
      this.banks = banks;
    })
  }
}
