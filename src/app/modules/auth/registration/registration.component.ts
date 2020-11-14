import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../store/app.reducer';
import { select, Store } from '@ngrx/store';
import { AlertService } from 'src/app/core/services';
import { UsersActions } from '../../../store/actions';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  model = new User();
  isSubscribe = true;
  isLoading: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {
    this.isLoading = this.store.select(fromRoot.getIsLoadingUser);
    this.store
      .pipe(
        select(fromRoot.getIsLoadedUser),
        takeWhile((x) => this.isSubscribe)
      )
      .subscribe((isLoaded) => {
        if (isLoaded) {
          this.model = new User();
        }
      });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.store.dispatch(UsersActions.registerUser({ user: Object.assign({}, this.model) }));
  }
}
