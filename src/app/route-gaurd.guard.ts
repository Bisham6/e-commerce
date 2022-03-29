import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdGuard implements CanActivate {

  constructor(private Auth: AngularFireAuth, private router: Router){


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.Auth.authState.pipe(take(1),map((user:any)=> {
      if (user){
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }))
  }

  
}
