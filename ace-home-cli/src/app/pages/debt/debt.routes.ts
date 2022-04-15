import { Routes } from '@angular/router';
import { DebtDashComponent } from './debt-dash/debt-dash.component';
import { DebtDetailsComponent } from './debt-details/debt-details.component';

export const DEBT_ROUTES: Routes = [
  {
    path: '', component: DebtDashComponent,
  },
  {
    path: 'details', component: DebtDetailsComponent
  },
];

