import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { BalanceComponent } from './balance/balance.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ModalComponent,
    DeleteFormComponent,
    BalanceComponent,
    ActivityFormComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent,
    BalanceComponent,
    DeleteFormComponent,
    ListComponent,
  ],
})
export class SharedModule { }
