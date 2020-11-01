import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class LoadGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (!this.authService.loggedIn) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.loggedIn;
  }
}
