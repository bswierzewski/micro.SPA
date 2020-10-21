import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, KindInformationService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';
import { KindActions } from '../actions';

@Injectable()
export class KindEffects {
  constructor(
    private kindService: KindInformationService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getKinds$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.loadKinds),
      mergeMap((action) =>
        this.kindService.getKinds().pipe(
          map((data) => {
            return KindActions.loadKindsSuccess({ kinds: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(KindActions.loadKindsError({ error }));
          })
        )
      )
    )
  );

  getKind$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.loadKind),
      mergeMap((action) => {
        if (action.id === 0) {
          return of(KindActions.loadKindSuccess({ kind: new Kind() }));
        } else {
          return this.kindService.getKind(action.id).pipe(
            map((data) => {
              return KindActions.loadKindSuccess({ kind: data });
            }),
            catchError((error: Error) => {
              this.alertService.error(error.message);
              this.router.navigateByUrl('/settings/information/kinds');
              return of(KindActions.loadKindError({ error }));
            })
          );
        }
      })
    )
  );

  deleteKind$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.deleteKind),
      mergeMap((action) =>
        this.kindService.deleteKind(action.id).pipe(
          map((data) => {
            this.alertService.success('Kind deleted successfully.');
            return KindActions.deleteKindSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(KindActions.deleteKindError({ error }));
          })
        )
      )
    )
  );

  addKind$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.addKind),
      mergeMap((action) => {
        return this.kindService.addKind(action.kind).pipe(
          map((data) => {
            this.alertService.success('Kind added successfully.');
            this.router.navigateByUrl('/settings/information/kinds');
            return KindActions.addKindSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(KindActions.addKindError({ error }));
          })
        );
      })
    )
  );

  updateKind$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.updateKind),
      mergeMap((action) => {
        return this.kindService.updateKind(action.kind).pipe(
          map((data) => {
            this.alertService.success('Kind updated successfully.');
            this.router.navigateByUrl('/settings/information/kinds');
            return KindActions.updateKindSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(KindActions.updateKindError({ error }));
          })
        );
      })
    )
  );
}
