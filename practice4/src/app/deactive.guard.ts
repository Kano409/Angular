import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AboutUsComponent } from './about-us/about-us.component';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DeactiveGuard implements CanDeactivate<AboutUsComponent> {
  canDeactivate(): boolean {
    return window.confirm('Are you sure for leave a page....?');
  }
}
