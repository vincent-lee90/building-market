import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authGuardService: AuthGuardService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
   /* return this.checkLogin(url);*/
      return true;
  }

  checkLogin(url: string): boolean {
    if (this.authGuardService.isLogin) {
      return true;
    }
    this.authGuardService.redirectUrl = url;
    this.router.navigate(['/account']);
    return false;
  }
}
