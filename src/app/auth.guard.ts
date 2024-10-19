import { of as observableOf, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean
            | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isLoggedIn()

            ? true
            : this.router.parseUrl('/login');
    }

    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //     return this.canActivate(childRoute, state);
    // }

    constructor(private router: Router, private authService: AuthService) { }
}
