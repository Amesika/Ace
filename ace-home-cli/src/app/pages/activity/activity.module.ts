import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDashComponent } from './activity-dash/activity-dash.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityListComponent } from './activity-list/activity-list.component';



@NgModule({
  declarations: [
    ActivityDashComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
