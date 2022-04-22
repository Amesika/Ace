import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradDashComponent } from './trad-dash/trad-dash.component';
import { RouterModule } from '@angular/router';
import { TRAD_ROUTES } from './trad.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcePanelItemTradComponent } from './ace-panel-item-trad/ace-panel-item-trad.component';



@NgModule({
  declarations: [
    TradDashComponent,
    AcePanelItemTradComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(TRAD_ROUTES)
  ]
})
export class TradAccountModule { }
