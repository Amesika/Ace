import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ace-devise',
  templateUrl: './ace-devise.component.html',
  styleUrls: ['./ace-devise.component.css']
})
export class AceDeviseComponent implements OnInit {

  symbol: string = '';

  deviseArray = [{devise: 'EUR' , symbol:"€"},{devise: 'USD' , symbol:"$"},{devise: 'CFA' , symbol:"CFA"}]

  @Input()
  deviseStr:string;

  constructor() {
     this.deviseStr = '';
   }

  ngOnInit(): void {
    this.deviseArray.forEach(item => {
      if(item.devise === this.deviseStr.toLocaleUpperCase())
        this.symbol = item.symbol;
    });
  }




}
