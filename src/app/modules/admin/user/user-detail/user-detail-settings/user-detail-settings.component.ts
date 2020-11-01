import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Role, User } from 'src/app/shared/models';
import * as fromRoot from '../../../../../store/app.reducer';
import { RoleActions, UsersActions } from '../../../../../store/actions';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail-settings',
  templateUrl: './user-detail-settings.component.html',
  styleUrls: ['./user-detail-settings.component.scss'],
})
export class UserDetailSettingsComponent implements OnInit, OnDestroy {
  roles$: Observable<Role[]>;
  model = new User();
  isSubscribe = true;

  constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(RoleActions.loadRoles());
    this.roles$ = this.store.select(fromRoot.getRoles);

    this.store
      .pipe(
        select(fromRoot.getUser),
        takeWhile((x) => this.isSubscribe)
      )
      .subscribe((user) => {
        if (user) {
          this.model = { ...user };
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

    this.store.dispatch(UsersActions.updateUser({ user: this.model }));
  }
}
