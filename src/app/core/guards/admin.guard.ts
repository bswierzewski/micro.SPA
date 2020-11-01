import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map((user) => {
        if (user.roles.includes('Admin')) {
          return true;
        } else {
          this.router.navigateByUrl('/home');
        }
      })
    );
  }
}
