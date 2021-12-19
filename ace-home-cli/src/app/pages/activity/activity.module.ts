import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDashComponent } from './activity-dash/activity-dash.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityFormComponent } from './activity-form/activity-form.component';



@NgModule({
  declarations: [
    ActivityDashComponent,
    ActivityListComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ActivityRoutingModule,
    SharedModule,
  ]
})
export class ActivityModule { }
