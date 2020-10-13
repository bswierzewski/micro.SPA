import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, VersionService } from '../../core/services';
import * as VersionActions from '../actions/version.actions';

@Injectable()
export class VersionEffects {
  constructor(
    private versionService: VersionService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getVersions$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.loadVersions),
      mergeMap((action) =>
        this.versionService.getVersions().pipe(
          map((data) => {
            return VersionActions.loadVersionsSuccess({ versions: data });
          }),
          catchError((error: Error) => {
            return of(VersionActions.loadVersionsError({ error }));
          })
        )
      )
    )
  );

  getVersion$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.loadVersion),
      mergeMap((action) => {
        return this.versionService.getVersion(action.id).pipe(
          map((data) => {
            return VersionActions.loadVersionSuccess({ version: data });
          }),
          catchError((error: Error) => {
            this.router.navigateByUrl('/admin/versions');
            return of(VersionActions.loadVersionError({ error }));
          })
        );
      })
    )
  );

  deleteVersion$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.deleteVersion),
      mergeMap((action) =>
        this.versionService.deleteVersion(action.id).pipe(
          map((data) => {
            return VersionActions.deleteVersionSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            return of(VersionActions.deleteVersionError({ error }));
          })
        )
      )
    )
  );

  addVersion$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.addVersion),
      mergeMap((action) => {
        return this.versionService.addVersion(action.version, action.file).pipe(
          map((data) => {
            this.alertService.success('Version added');
            this.router.navigateByUrl('/admin/versions');
            return VersionActions.addVersionSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(VersionActions.addVersionError({ error }));
          })
        );
      })
    )
  );

  updateVersion$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.updateVersion),
      mergeMap((action) => {
        return this.versionService.updateVersion(action.id, action.version).pipe(
          map((data) => {
            this.alertService.success('Version updated');
            this.router.navigateByUrl('/admin/versions');
            return VersionActions.updateVersionSuccess();
          }),
          catchError((error: Error) => {
            return of(VersionActions.updateVersionError({ error }));
          })
        );
      })
    )
  );
}
