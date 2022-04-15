import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { BalanceComponent } from './balance/balance.component';
import { ListComponent } from './list/list.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { AceNumberComponent } from './ace-number/ace-number.component';
import { AcePanelComponent } from './ace-panel/ace-panel.component';
import { AcePanelItemBankComponent } from './ace-panel-item-bank/ace-panel-item-bank.component';
import { AceCardDashComponent } from './ace-card-dash/ace-card-dash.component';

@NgModule({
  declarations: [
    ModalComponent,
    DeleteFormComponent,
    BalanceComponent,
    ListComponent,
    DashHeaderComponent,
    AceNumberComponent,
    AcePanelComponent,
    AcePanelItemBankComponent,
    AceCardDashComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
    BalanceComponent,
    DeleteFormComponent,
    ListComponent,
    AceNumberComponent,
    DashHeaderComponent,
    AcePanelComponent,
    AcePanelItemBankComponent,
    AceCardDashComponent,
  ],
})
export class SharedModule { }
