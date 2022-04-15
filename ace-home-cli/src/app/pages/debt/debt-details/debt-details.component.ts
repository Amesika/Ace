import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debt } from 'src/app/models/debt';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-debt-details',
  templateUrl: './debt-details.component.html',
  styleUrls: ['./debt-details.component.css']
})
export class DebtDetailsComponent implements OnInit {

  debt!: Debt;

  modalId: String = "bankModalId";
  modalId_: String = "#bankModalId";
  modalTitle: String = "";

  isUpdate = false;
  isDelete = false;

  constructor(public router: Router, private debtSrv: DebtService) {
  }

  ngOnInit(): void {
    this.debt = history.state;
  }

  handelBack() {
    this.router.navigate(["debt"])
  }

  handelDelete() {
    this.modalTitle = "Supprimer une banque";
    this.isUpdate = false;
    this.isDelete = true;
  }

  handelUpdate() {
    this.modalTitle = "Modifier une banque";
    this.isUpdate = true;
    this.isDelete = false;
  }

  deleteBank(event: Debt) {
    let debt = event;
    this.debtSrv.deleteDebt(debt.id).subscribe(() => {
      this.router.navigate(["debt"])
    })
  }

  updateBank() {
    this.debtSrv.putDebt(this.debt).subscribe((debt) => {
      this.debt = debt;
    })
  }

}
