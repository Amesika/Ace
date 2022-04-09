import { Routes } from "@angular/router";
import { BankDashComponent } from "./bank-dash/bank-dash.component";
import { BankDetailsComponent } from "./bank-details/bank-details.component";

export const BANK_ROUTES: Routes = [
    {
        path: '',
        component:BankDashComponent,
    },
    {
        path: 'details',
        component: BankDetailsComponent
    }
];
