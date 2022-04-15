import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDashComponent } from './debt-dash/debt-dash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DebtFormComponent } from './debt-form/debt-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DebtItemComponent } from './debt-item/debt-item.component';
import { DebtPanelItemComponent } from './debt-panel-item/debt-panel-item.component';
import { DebtDetailsComponent } from './debt-details/debt-details.component';
import { DEBT_ROUTES } from './debt.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DebtDashComponent,
    DebtFormComponent,
    DebtItemComponent,
    DebtPanelItemComponent,
    DebtDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(DEBT_ROUTES)
  ]
})
export class DebtModule { }
