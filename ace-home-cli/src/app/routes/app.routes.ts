import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: 'bank',
        loadChildren: () => import('../pages/bank/bank.module').then(b => b.BankModule),
    }
];
