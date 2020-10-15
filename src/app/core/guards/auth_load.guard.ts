import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthLoadGuardService implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
