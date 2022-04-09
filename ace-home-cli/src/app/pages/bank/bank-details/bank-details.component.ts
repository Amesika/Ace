import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../models/bank';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bank!: Bank;

  modalId: String = "bankModalId";
  modalId_: String = "#bankModalId";
  modalTitle: String = "";

  isUpdate = false;
  isDelete = false;

  constructor(public router: Router, private bankSrv: BankService) {
  }

  ngOnInit(): void {
    this.bank = history.state;
  }

  handelBack() {
    this.router.navigate(["bank"])
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

  deleteBank(event: Bank) {
    let bank = event;
    this.bankSrv.deleteBank(bank.id).subscribe(() => {
      this.router.navigate(["bank"])
    })
  }

  updateBank() {
    this.bankSrv.getBank(this.bank.id).subscribe((bank) => {
      this.bank = bank;
    })
  }

}
