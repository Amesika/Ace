import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Debt } from 'src/app/models/debt';
import { Modal } from 'src/app/models/modal';
import { ModalContol } from 'src/app/models/modal-control';
import { DebtService } from 'src/app/services/debt.service';
import { Balance } from 'src/app/shared/balance/balance';
import { AcePanel } from 'src/app/shared/model/ace-panel';
import { DashHeader } from 'src/app/shared/model/dash-header';
moment.locale("fr");

@Component({
  selector: 'app-debt-dash',
  templateUrl: './debt-dash.component.html',
  styleUrls: ['./debt-dash.component.css']
})
export class DebtDashComponent implements OnInit {

  dashHeader!: DashHeader;
  option = 1;

  acePanel:AcePanel;
  modalControl:ModalContol;
  


  balance: Balance = new Balance;
  debts: Debt[] = [];
  debtsSubscription: Subscription | undefined;

  @ContentChild('tmpl') tmplRef: TemplateRef<any> | undefined;

  constructor(private debtSrv: DebtService) {

    this.dashHeader = new DashHeader;
    this.dashHeader.title = "Total des dêttes au " + moment().format('Do MMMM YYYY');
    this.acePanel = new AcePanel
    this.acePanel.title = "Tous les dêttes"
    this.modalControl = new ModalContol;
    this.modalControl.modalId = "debt-dash";
    this.modalControl.modalId_ = "#debt-dash";
    this.modalControl.modalTitle = "";
    this.modalControl.modalOption = 0;

  }

  ngOnInit(): void {

    this.getData();
  }

  handleDataEvent() {
    this.getData();
  }

  addDebt() {
    console.log("addDebt")
    this.modalControl.modalTitle = "Créer une dêtte"
    this.modalControl.modalOption = 0;
    this.modalControl.selectData = new Debt();;
  }

  getData() {
    this.getList();
    this.getBalance();
  }

  getBalance() {
    this.debtSrv.getBalance().subscribe(data => {
      this.balance.value = data;
      this.dashHeader.amount = data;
      this.acePanel.subTitle = data;
    })
  }

  getList() {

    this.debtsSubscription = this.debtSrv
      .getDebts()
      .subscribe(
        (debts: Debt[]) => {
          this.debts = debts;
          this.acePanel.items = debts;
        }
      );
  }

  handleCrudEvent(event: Modal) {
    console.log("handleCrudEvent")
    this.modalControl.modalTitle = event.title.toString();
    this.modalControl.modalOption = event.option;
    this.modalControl.selectData = event.data;
    console.log(this.balance);
  }

  handleDeleteEvent(data: any) {
    this.debtSrv.deleteDebt(data.id).subscribe(data => {
      console.log(data);
      this.getData();
    });
  }



}
