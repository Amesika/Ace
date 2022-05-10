import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TradService } from '../services/trad.service';

@Injectable({
  providedIn: 'root'
})
export class TradingAccResolver implements Resolve<any> {
  constructor(private tradingSrv: TradService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<ScoreModel>> {
    return  this.tradingSrv.getTradinAccActivities(5);
  }
}
