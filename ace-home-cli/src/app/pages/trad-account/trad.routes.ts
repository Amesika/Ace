import { Routes } from "@angular/router";
import { TradDashComponent } from "./trad-dash/trad-dash.component";
import { TradDetailsComponent } from "./trad-details/trad-details.component";

export const TRAD_ROUTES: Routes = [
    {
        path: '',
        component:TradDashComponent,
    },
    {
        path: 'details',
        component:TradDetailsComponent
    }
];
