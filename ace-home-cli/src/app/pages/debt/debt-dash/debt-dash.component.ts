import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Debt } from 'src/app/models/debt';
import { Modal } from 'src/app/models/modal';
import { DebtService } from 'src/app/services/debt.service';
import { Balance } from 'src/app/shared/balance/balance';

@Component({
  selector: 'app-debt-dash',
  templateUrl: './debt-dash.component.html',
  styleUrls: ['./debt-dash.component.css']
})
export class DebtDashComponent implements OnInit {


  balance: Balance = new Balance;
  debts: Debt[] = [];
  debtsSubscription: Subscription | undefined;

  @ContentChild('tmpl') tmplRef: TemplateRef<any> | undefined;
  
  constructor(private debtSrv: DebtService) {
    this.balance.title="Balance Des Dêttes";
    this.balance.modalId = "debt-dash";
    this.balance.modalId_ = "#debt-dash";
    this.balance.modalTitle = "";
    this.balance.modalOption = 0;
   }

  ngOnInit(): void {

    this.getData();
  }

  handleDataEvent() {
    this.getData();
  }

  addDebt() {
    console.log("addDebt")
    this.balance.modalTitle = "Créer une dêtte"
    this.balance.modalOption = 0;
    this.balance.selectData = new Debt();;
  }

  getData() {
    this.getList();
    this.getBalance();
  }

  getBalance() {
    this.debtSrv.getBalance().subscribe(data => {
      this.balance.value = data;
    })
  }

  getList() {
    for (let index = 0; index < 50; index++) {
      let item = new Debt();
      item.id = 3000 + index;
      item.description = "Depense - " + index;
      item.initAmount = 39 * index;
      this.debts.push(item);
    }

    this.debtsSubscription = this.debtSrv
      .getDebts()
      .subscribe(
        (debts: Debt[]) => {
          this.debts = debts;
        }
      );
  }

  handleCrudEvent(event: Modal) {
    console.log("handleCrudEvent")
    this.balance.modalTitle = event.title;
    this.balance.modalOption = event.option;
    this.balance.selectData = event.data;
    console.log(this.balance);
  }

  handleDeleteEvent(data:any) {
    this.debtSrv.deleteDebt(data.id).subscribe(data => {
      console.log(data);
      this.getData();
    });
  }

  

}
