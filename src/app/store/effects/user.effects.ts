import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, AuthService, UserService } from '../../core/services';
import { UsersActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private action$: Actions,
    private alertService: AlertService
  ) {}

  getUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.loadUser),
      mergeMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((data) => {
            return UsersActions.loadUserSuccess({ user: data });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.loadUserError({ error }));
          })
        )
      )
    )
  );

  getUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map((data) => {
            return UsersActions.loadUsersSuccess({ users: data });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.loadUsersError({ error }));
          })
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.registerUser),
      mergeMap((action) => {
        return this.authService.registerUser(action.user).pipe(
          map((data) => {
            this.alertService.success('User register successfully.');
            return UsersActions.registerUserSuccess();
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.registerUserError({ error }));
          })
        );
      })
    )
  );

  activateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.activateUser),
      mergeMap((action) => {
        return this.userService.activateUser(action.user).pipe(
          map((data) => {
            this.alertService.success('User activated successfully.');
            return UsersActions.activateUserSuccess({ user: action.user });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.activateUserError({ error }));
          })
        );
      })
    )
  );
}
