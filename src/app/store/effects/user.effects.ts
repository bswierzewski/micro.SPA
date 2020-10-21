import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, UserService } from '../../core/services';
import { UsersActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private action$: Actions, private alertService: AlertService) {}

  getUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map((data) => {
            return UsersActions.loadUsersSuccess({ users: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(UsersActions.loadUsersError({ error }));
          })
        )
      )
    )
  );

  activateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.activateUser),
      mergeMap((action) => {
        return this.userService.activateUser(action.user).pipe(
          map((data) => {
            this.alertService.success('User activated successfully.');
            return UsersActions.activateUserSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(UsersActions.activateUserError({ error }));
          })
        );
      })
    )
  );
}
