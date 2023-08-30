import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CakeOrderComponent } from 'src/cake-order/cake-order.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<CakeOrderComponent>{

  constructor() { }
  canDeactivate(component: CakeOrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canexit();
  }
}
