import { Component, Input, OnInit } from '@angular/core';
import { DashHeader } from '../model/dash-header';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {

  @Input()
  dashHeader!:DashHeader

  @Input()
  option!:number;

  constructor() {
    if(!this.dashHeader){
      this.dashHeader = new DashHeader;
    }
  }

  ngOnInit(): void {
  }

}
