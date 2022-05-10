import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradDashComponent } from './trad-dash/trad-dash.component';
import { RouterModule } from '@angular/router';
import { TRAD_ROUTES } from './trad.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcePanelItemTradComponent } from './ace-panel-item-trad/ace-panel-item-trad.component';
import { TradDetailsComponent } from './trad-details/trad-details.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    TradDashComponent,
    AcePanelItemTradComponent,
    TradDetailsComponent,
  ],
  imports: [
    DataTablesModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(TRAD_ROUTES)
  ], 
})
export class TradAccountModule { }
