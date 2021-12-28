import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDashComponent } from './activity-dash/activity-dash.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActivityDashComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
