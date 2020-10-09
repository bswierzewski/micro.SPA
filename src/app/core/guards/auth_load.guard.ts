import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthLoadGuardService implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route): boolean {
    //determine whether you want to load the module
    //return true or false

    return false;
  }
}
