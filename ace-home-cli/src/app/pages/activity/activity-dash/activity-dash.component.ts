import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { Modal } from 'src/app/models/modal';
import { ActivityService } from 'src/app/services/activity.service';
import { Balance } from 'src/app/shared/balance/balance';

@Component({
  selector: 'app-activity-dash',
  templateUrl: './activity-dash.component.html',
  styleUrls: ['./activity-dash.component.css']
})
export class ActivityDashComponent implements OnInit {

  balance: Balance = new Balance;
  date: String = "";
  sources: Activity[] = [];
  sourcesSubscription: Subscription | undefined;
  depenses: Activity[] = [];
  depensesSubscription: Subscription | undefined;

  modalId = "activity-dash";
  modalId_ = "#activity-dash";
  modalTitle: String = "";
  modalOption = 0;

  selectAct: Activity = new Activity;

  constructor(private actSrv: ActivityService) { 
    this.balance.modalId = "activity-dash";
    this.balance.modalId_ = "#activity-dash";
    this.balance.modalTitle = "";
    this.balance.modalOption = 0;
  }

  ngOnInit(): void {
    this.date = moment(new Date()).format('DD-MM-YYYY');
    this.getData();

  }

  getSources() {
    for (let index = 0; index < 50; index++) {
      let item = new Activity();
      item.id = 2000 + index;
      item.description = "Source - " + index;
      item.amount = 100 * index;
      this.sources.push(item);
    }

    this.sourcesSubscription = this.actSrv
      .getActivitiesByType("2021-12-01", "2021-12-31", "source")
      .subscribe(
        (activities: Activity[]) => {
          this.sources = activities;
        }
      );
  }

  getDepense() {
    for (let index = 0; index < 50; index++) {
      let item = new Activity();
      item.id = 3000 + index;
      item.description = "Depense - " + index;
      item.amount = 39 * index;
      this.depenses.push(item);
    }

    this.sourcesSubscription = this.actSrv
      .getActivitiesByType("2021-12-01", "2021-12-31", "depense")
      .subscribe(
        (activities: Activity[]) => {
          this.depenses = activities;
        }
      );
  }

  getData() {
    this.getDepense();
    this.getSources();
    this.getBalance();
  }

  getBalance() {
    this.actSrv.getBalance().subscribe(data => {
      this.balance.value = data;
    })
  }

  addActivity() {
    console.log("addActivity")
    this.balance.modalTitle = "Créer une activité"
    let act = new Activity();
    this.balance.modalOption = 0;
    this.balance.selectData = act;
  }

  handleCrudEvent(event: Modal) {
    console.log("handleCrudEvent")
    this.balance.modalTitle = event.title;
    this.balance.modalOption = event.option;
    this.balance.selectData = event.data;
    console.log(this.balance);
  }

  handleDataEvent() {
    this.getData();
  }

}
