import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { KindInformationService } from 'src/app/core/services';
import * as KindActions from '../actions/kind.actions';

@Injectable()
export class KindEffects {
  constructor(private kindService: KindInformationService, private action$: Actions) {}

  getKinds$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.loadKinds),
      mergeMap((action) =>
        this.kindService.getKinds().pipe(
          map((data) => {
            return KindActions.loadKindsSuccess({ kinds: data });
          }),
          catchError((error: Error) => {
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
        console.log(action);
        return this.kindService.getKind(action.id).pipe(
          map((data) => {
            return KindActions.loadKindSuccess({ kind: data });
          }),
          catchError((error: Error) => {
            return of(KindActions.loadKindError({ error }));
          })
        );
      })
    )
  );

  deleteKind$ = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.deleteKind),
      mergeMap((action) =>
        this.kindService.removeKind(action.id).pipe(
          map((data) => {
            return KindActions.deleteKindSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            return of(KindActions.deleteKindError({ error }));
          })
        )
      )
    )
  );
}
