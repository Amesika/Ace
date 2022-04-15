import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModalContol } from 'src/app/models/modal-control';
import { Balance } from 'src/app/shared/balance/balance';
import { AcePanel } from 'src/app/shared/model/ace-panel';
import { DashHeader } from 'src/app/shared/model/dash-header';
import { Bank } from '../models/bank';
import { BankSold } from '../models/bank-sold';
import { BankService } from '../services/bank.service';
moment.locale("fr");

@Component({
  selector: 'app-bank-dash',
  templateUrl: './bank-dash.component.html',
  styleUrls: ['./bank-dash.component.css']
})
export class BankDashComponent implements OnInit {

  dashHeader!:DashHeader;
  acePanel!:AcePanel;
  modalControl:ModalContol;

  balance: Balance = new Balance;
  banks: BankSold[] = [];
  constructor(private bankSrv: BankService) {
    this.dashHeader = new DashHeader;
    this.acePanel = new AcePanel
    this.acePanel.title = "Tous les banques"
    this.modalControl = new ModalContol;
    this.modalControl.modalId = "bank-dash";
    this.modalControl.modalId_ = "#bank-dash";
    this.modalControl.modalTitle = "";
    this.modalControl.modalOption = 0;

  }

  ngOnInit(): void {
    this.getBanks();
    this.dashHeader.title = "Total des avoirs au " + moment().format('Do MMMM YYYY');
  }

  addBank() {
    console.log("addBank")
    this.modalControl.modalTitle = "Créer une banque"
    let bank = new Bank();
    this.modalControl.modalOption = 0;
    this.modalControl.selectData = bank;
  }

  handleDataEvent() {
    console.log("HandleDataEvent")
    this.getBanks();
  }

  getBanks() {

    this.bankSrv.getBanksWithSold().subscribe((banks) => {
      this.acePanel.items = banks;
    })

    this.bankSrv.getTotalSold().subscribe((sold) => {
      this.dashHeader.amount = sold;
      this.acePanel.subTitle = sold;
    })
  }
}
