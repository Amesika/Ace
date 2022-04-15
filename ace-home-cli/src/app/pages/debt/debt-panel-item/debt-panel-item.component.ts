import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debt } from 'src/app/models/debt';

@Component({
  selector: 'app-debt-panel-item',
  templateUrl: './debt-panel-item.component.html',
  styleUrls: ['./debt-panel-item.component.css']
})
export class DebtPanelItemComponent implements OnInit {

  @Input()
  debt : Debt;

  constructor(private router:Router) { 
    this.debt = new Debt;
  }

  getItemDetails() {
    this.router.navigate(['debt/details'], { state: this.debt});
  }

  ngOnInit(): void {
  }

}
