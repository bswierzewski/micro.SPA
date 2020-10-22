import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/core/services';
import { UsersActions } from '../../../store/actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  model = new User();

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.store.dispatch(UsersActions.registerUser({ user: this.model }));
  }
}
