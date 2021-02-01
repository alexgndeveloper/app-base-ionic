import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authSrv: AuthService
  ) { }

  canActivate(): boolean | UrlTree {
    if (this.authSrv.isUserLogged()) {
      return true;
    }
    return this.router.parseUrl('/');
  }

}
