import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDashComponent } from './bank-dash/bank-dash.component';
import { RouterModule } from '@angular/router';
import { BANK_ROUTES } from './bank.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankFormComponent } from './bank-form/bank-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankCardComponent } from './bank-card/bank-card.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';



@NgModule({
  declarations: [
    BankDashComponent,
    BankFormComponent,
    BankCardComponent,
    BankDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(BANK_ROUTES)
  ]
})
export class BankModule { }
