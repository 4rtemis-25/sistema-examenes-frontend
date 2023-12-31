import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Lógica del guard
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'ADMIN') {
      return true; // Permite el acceso
    }

    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'NORMAL') {
      return true; // Permite el acceso
    }

    this.router.navigate(['login']);

    return false
  }
}

