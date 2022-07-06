import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookComponent } from './book/book.component';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root',
})
export class DeactiveGuard implements CanDeactivate<BookComponent> {
  canDeactivate(): boolean {
    return window.confirm('Are you sure to leave the page....?');
  }
}
