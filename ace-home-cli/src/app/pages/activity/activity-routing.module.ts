import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDashComponent } from './activity-dash/activity-dash.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activity', component: ActivityDashComponent },
  { path: 'activity', component: ActivityDashComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }

/*{ path: '', redirectTo: 'home' , pathMatch: 'full' },
{ path: '**', redirectTo: 'home' }*/
