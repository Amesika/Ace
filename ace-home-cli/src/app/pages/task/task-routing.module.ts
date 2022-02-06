import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashComponent } from './task-dash/task-dash.component';

const routes: Routes = [
  { path: 'task', component: TaskDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
