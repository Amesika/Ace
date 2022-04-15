import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-ace-number',
  templateUrl: './ace-number.component.html',
  styleUrls: ['./ace-number.component.css']
})
export class AceNumberComponent implements OnInit {

  @Input()
  value:number = 0;
  @Input()
  option!:number ;
   
  constructor() { }

  ngOnInit(): void {
  }

}
