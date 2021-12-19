import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input()title:String ="";
  @Input()items:Activity[]=[];
  @Input()color:String ="";


  constructor() { }

  ngOnInit(): void {
  }

}
