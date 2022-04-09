import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { BalanceComponent } from './balance/balance.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ModalComponent,
    DeleteFormComponent,
    BalanceComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
    BalanceComponent,
    DeleteFormComponent,
    ListComponent,
  ],
})
export class SharedModule { }
