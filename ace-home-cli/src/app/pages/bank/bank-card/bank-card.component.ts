import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from 'src/app/pages/bank/models/bank';
import { BankSold } from '../models/bank-sold';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.css']
})
export class BankCardComponent implements OnInit {

  @Input() bank!: BankSold;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate(['bank/details'], { state: this.bank });
  }

}
