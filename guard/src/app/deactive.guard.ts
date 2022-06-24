import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable({
  providedIn: 'root',
})
//6. use candeactive in guard
export class DeactiveGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate(): boolean {
    return window.confirm('Are you sure to leave the page....?');
  }
}
