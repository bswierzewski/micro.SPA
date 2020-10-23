import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AlertService } from 'src/app/core/services';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model = new User();

  constructor(public authService: AuthService, private alertService: AlertService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertService.success('Logged in successfully');
      },
      (error) => {
        this.alertService.error(error);
      },
      () => {
        this.router.navigate(['/home']);
      }
    );
  }
}
