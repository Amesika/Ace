import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDashComponent } from './debt-dash/debt-dash.component';
import { DebtRoutingModule } from './debt-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DebtDashComponent
  ],
  imports: [
    SharedModule,
    DebtRoutingModule
  ]
})
export class DebtModule { }
