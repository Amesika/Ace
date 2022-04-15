import { Component, Input, OnInit } from '@angular/core';
import { CardDash } from '../model/card-dash';

@Component({
  selector: 'app-ace-card-dash',
  templateUrl: './ace-card-dash.component.html',
  styleUrls: ['./ace-card-dash.component.css']
})
export class AceCardDashComponent implements OnInit {

  @Input()
  cardDash:CardDash;

  constructor() { 
    this.cardDash = new CardDash;
  }

  ngOnInit(): void {
  }

}
