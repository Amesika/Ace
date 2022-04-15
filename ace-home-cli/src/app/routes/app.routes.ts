import { Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'bank',
        loadChildren: () => import('../pages/bank/bank.module').then(b => b.BankModule),
    }, 
    {
        path: 'debt',
        loadChildren: () => import('../pages/debt/debt.module').then(d => d.DebtModule),
    }, 
    {
        path: '**', component: HomeComponent
    }, 
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
