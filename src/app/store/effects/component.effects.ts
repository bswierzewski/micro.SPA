import { DeviceComponentInformationService } from '../../core/services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ComponentActions from '../actions/component.actions';

@Injectable()
export class ComponentEffects {
  constructor(private componentService: DeviceComponentInformationService, private action$: Actions) {}

  getComponents$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.loadComponents),
      mergeMap((action) =>
        this.componentService.getDeviceComponents().pipe(
          map((data) => {
            return ComponentActions.loadComponentsSuccess({ components: data });
          }),
          catchError((error: Error) => {
            return of(ComponentActions.loadComponentsError({ error }));
          })
        )
      )
    )
  );

  deleteComponent$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.deleteComponent),
      mergeMap((action) =>
        this.componentService.removeDeviceComponent(action.id).pipe(
          map((data) => {
            return ComponentActions.deleteComponentSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            return of(ComponentActions.deleteComponentError({ error }));
          })
        )
      )
    )
  );
}
