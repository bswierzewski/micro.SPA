import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { Observable, ReplaySubject } from 'rxjs';
import { User, AppUser } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = environment.authUrl + 'auth/';
  loggedIn: boolean;
  private currentUserSource = new ReplaySubject<AppUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private alertService: AlertService, private router: Router) {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    const user: AppUser = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.setCurrentUser(user);
    }
  }

  login(model: User): any {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  registerUser(user: User): Observable<any> {
    this.router.navigateByUrl('/login');
    return this.http.post(this.authUrl + 'register', user);
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.alertService.message('Logged out');
    this.router.navigate(['/login']);
  }

  setCurrentUser(appUser: AppUser): void {
    this.loggedIn = !!appUser;
    const roles = this.getDecodedToken(appUser.token).role;
    appUser.roles = Array.isArray(roles) ? roles : [roles];
    localStorage.setItem('user', JSON.stringify(appUser));
    this.currentUserSource.next(appUser);
  }

  getDecodedToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
