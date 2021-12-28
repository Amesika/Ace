import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDashComponent } from './debt-dash/debt-dash.component';
import { DebtRoutingModule } from './debt-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DebtFormComponent } from './debt-form/debt-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DebtDashComponent,
    DebtFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DebtRoutingModule,
  ]
})
export class DebtModule { }
