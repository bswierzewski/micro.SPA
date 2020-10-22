import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = environment.authUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private alertService: AlertService, private router: Router) {}

  login(model: any): any {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.authUrl + 'register', user);
  }

  loggedIn(): any {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.alertService.message('Logged out');
    this.router.navigate(['/login']);
  }
}
