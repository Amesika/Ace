import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtDashComponent } from './debt-dash/debt-dash.component';

const routes: Routes = [
  { path: 'debt', component: DebtDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DebtRoutingModule { }
