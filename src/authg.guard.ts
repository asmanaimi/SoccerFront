import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements  CanActivate  {
  constructor(
    private userService: UsersService,
    private _router :Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.isLoggedIn()) {
      console.log("user is ",this.userService.isLoggedIn());
      return true;
    }

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }} );
    return false;
  }
  
}
