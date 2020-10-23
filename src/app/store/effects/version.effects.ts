import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Version } from 'src/app/shared/models';
import { AlertService, VersionService } from '../../core/services';
import { VersionActions } from '../actions';

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
          catchError((error: any) => {
            this.alertService.error(error);
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
        if (action.id === 0) {
          return of(VersionActions.loadVersionSuccess({ version: new Version() }));
        } else {
          return this.versionService.getVersion(action.id).pipe(
            map((data) => {
              return VersionActions.loadVersionSuccess({ version: data });
            }),
            catchError((error: any) => {
              this.alertService.error(error);
              this.router.navigateByUrl('/settings/versions');
              return of(VersionActions.loadVersionError({ error }));
            })
          );
        }
      })
    )
  );

  deleteVersion$ = createEffect(() =>
    this.action$.pipe(
      ofType(VersionActions.deleteVersion),
      mergeMap((action) =>
        this.versionService.deleteVersion(action.id).pipe(
          map((data) => {
            this.alertService.success('Version deleted successfully.');
            return VersionActions.deleteVersionSuccess({ id: action.id });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
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
        return this.versionService.addVersion(action.version).pipe(
          map((data) => {
            this.alertService.success('Version added successfully.');
            this.router.navigateByUrl('/settings/versions');
            return VersionActions.addVersionSuccess();
          }),
          catchError((error: any) => {
            this.alertService.error(error);
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
        return this.versionService.updateVersion(action.version).pipe(
          map((data) => {
            this.alertService.success('Version updated successfully.');
            this.router.navigateByUrl('/settings/versions');
            return VersionActions.updateVersionSuccess();
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(VersionActions.updateVersionError({ error }));
          })
        );
      })
    )
  );
}
