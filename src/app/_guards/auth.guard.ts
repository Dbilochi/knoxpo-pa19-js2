import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  public user_type;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.user_type = localStorage.getItem('user_type')
    if (this.user_type == 'normal' || this.user_type == 'admin') {
        return true;
    }
    else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/']);
      return false;
    }
  }
}
