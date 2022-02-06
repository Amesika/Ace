import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDashComponent } from './task-dash/task-dash.component';
import { TaskRoutingModule } from './task-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormatDatePipe } from './pipe/format-date.pipe';
import { FormatStrPipe } from './pipe/format-str.pipe';
import { TaskPriorityComponent } from './task-priority/task-priority.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ActionComponent } from './action/action.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    TaskDashComponent,
    FormatDatePipe,
    FormatStrPipe,
    TaskPriorityComponent,
    TaskStatusComponent,
    ActionComponent
  ],
  imports: [
    DropdownModule,
    ToastModule,
    CommonModule,
    FormsModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    SplitButtonModule,
    ProgressBarModule,
    ButtonModule,
    ToolbarModule,
    RippleModule,
    MenuModule,
    DialogModule,
    TaskRoutingModule,
    InputNumberModule,
    SliderModule,
    ConfirmDialogModule
  ]
})
export class TaskModule { }
