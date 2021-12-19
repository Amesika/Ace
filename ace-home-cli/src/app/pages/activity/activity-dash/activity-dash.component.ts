import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-dash',
  templateUrl: './activity-dash.component.html',
  styleUrls: ['./activity-dash.component.css']
})
export class ActivityDashComponent implements OnInit {

  balance:number=0;
  date:String="";
  sources: Activity[]=[];
  depenses: Activity[]=[];

  constructor(private actSrv:ActivityService  ) { }

  ngOnInit(): void {
    this.date = moment(new Date()).format('DD-MM-YYYY');

    this.getDepense();
    this.getSources();
    this.getBalance();
  }

  getSources(){
    for (let index = 0; index < 50; index++) {
      let item = new Activity();
      item.description="Source - "+index;
      item.amount=100*index;
      this.sources.push(item);
    }
  }

  getDepense(){
    for (let index = 0; index < 50; index++) {
      let item = new Activity();
      item.description="Depense - "+index;
      item.amount=39*index;
      this.depenses.push(item);
    }
  }

  getBalance(){
    this.actSrv.getBalance().subscribe(data=>{
      this.balance = data;
    })
  }

}
