import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDashComponent } from './activity-dash/activity-dash.component';

const routes: Routes = [

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
