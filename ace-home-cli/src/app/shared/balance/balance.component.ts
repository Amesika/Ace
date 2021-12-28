import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Activity } from 'src/app/models/activity';
import { Balance } from './balance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  @Input() balance: Balance = new Balance;
  date: String = "";

  @Output() dataEvent = new EventEmitter<void>();

  @Output() addEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.date = moment(new Date()).format('DD-MM-YYYY');
  }

  addActivity() {
    console.log("addActivity")
    this.balance.modalTitle = "Créer une activité"
    let act = new Activity();
    this.balance.selectData = act;
    this.addEvent.emit();
  }

  handleDataEvent() {
    this.dataEvent.emit();
  }

}
