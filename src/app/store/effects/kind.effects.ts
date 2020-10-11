import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Kind } from '../../shared/models';
import * as KindActions from '../actions/kind.actions';

import { environment } from 'src/environments/environment';

@Injectable()
export class KindEffects {
  constructor(private http: HttpClient, private action$: Actions) {}
  kindsUrl = environment.backendUrl + 'kinds';

  getKinds$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(KindActions.loadKinds),
      mergeMap((action) =>
        this.http.get<Kind[]>(this.kindsUrl).pipe(
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
}
