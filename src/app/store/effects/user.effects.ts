import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AlertService, AuthService, UserService } from '../../core/services';
import { UsersActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private action$: Actions,
    private alertService: AlertService,
    private router: Router
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

  updateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.updateUser),
      mergeMap((action) => {
        return this.userService.updateUser(action.user).pipe(
          switchMap((data) => {
            this.alertService.success('User updated successfully.');
            this.router.navigateByUrl('/admin/users/' + `${action.user.id}` + '/informations');
            return [UsersActions.updateUserSuccess(), UsersActions.loadUser({ id: action.user.id })];
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.updateUserError({ error }));
          })
        );
      })
    )
  );

  deleteUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UsersActions.deleteUser),
      mergeMap((action) => {
        return this.userService.deleteUser(action.id).pipe(
          switchMap((data) => {
            this.alertService.success('User deleted successfully.');
            return [UsersActions.deleteUserSuccess(), UsersActions.loadUsers()];
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(UsersActions.deleteUserError({ error }));
          })
        );
      })
    )
  );
}
