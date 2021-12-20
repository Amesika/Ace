import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';



@NgModule({
  declarations: [
    ModalComponent,
    DeleteFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    DeleteFormComponent
  ],
})
export class SharedModule { }
