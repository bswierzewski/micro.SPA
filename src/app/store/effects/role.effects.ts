import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, RoleService } from '../../core/services';
import { Role } from '../../shared/models';
import { RoleActions } from '../actions';

@Injectable()
export class RoleEffects {
  constructor(
    private roleService: RoleService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(RoleActions.loadRoles),
      mergeMap((action) =>
        this.roleService.getRoles().pipe(
          map((data) => {
            return RoleActions.loadRolesSuccess({ roles: data });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(RoleActions.loadRolesError({ error }));
          })
        )
      )
    )
  );

  deleteRole$ = createEffect(() =>
    this.action$.pipe(
      ofType(RoleActions.deleteRole),
      mergeMap((action) =>
        this.roleService.deleteRole(action.id).pipe(
          map((data) => {
            this.alertService.success('Role deleted successfully.');
            return RoleActions.deleteRoleSuccess({ id: action.id });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(RoleActions.deleteRoleError({ error }));
          })
        )
      )
    )
  );

  addRole$ = createEffect(() =>
    this.action$.pipe(
      ofType(RoleActions.addRole),
      mergeMap((action) => {
        return this.roleService.addRole(action.role).pipe(
          map((data) => {
            this.alertService.success('Role added successfully.');
            this.router.navigateByUrl('/settings/information/roles');
            return RoleActions.addRoleSuccess();
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(RoleActions.addRoleError({ error }));
          })
        );
      })
    )
  );
}
