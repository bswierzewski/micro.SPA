import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../_services/auth.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private http: HttpClient, public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      if (error.error instanceof ErrorEvent) {
        // client-side error
        this.alertify.error(`Error: ${error.error.message}`);
      } else {
        // server-side error
        this.alertify.error(`Error: Service not respond`);
      }
    }, () => {
      this.router.navigate(['/panels']);
    });
  }
}