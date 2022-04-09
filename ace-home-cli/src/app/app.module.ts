import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ActivityModule } from './pages/activity/activity.module';
import { DebtModule } from './pages/debt/debt.module';
import { HomeComponent } from './pages/home/home.component';
import { TaskModule } from './pages/task/task.module';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './routes/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ActivityModule,
    DebtModule,
    TaskModule,
    SharedModule,
    FormsModule , 
    RouterModule.forRoot(APP_ROUTES),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
