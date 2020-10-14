import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ComponentActions from '../actions/component.actions';
import { AlertService, DeviceComponentInformationService } from 'src/app/core/services';
import { DeviceComponent } from 'src/app/shared/models';

@Injectable()
export class ComponentEffects {
  constructor(
    private componentService: DeviceComponentInformationService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getComponents$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.loadComponents),
      mergeMap((action) =>
        this.componentService.getDeviceComponents(action.id).pipe(
          map((data) => {
            return ComponentActions.loadComponentsSuccess({ components: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(ComponentActions.loadComponentsError({ error }));
          })
        )
      )
    )
  );

  getComponent$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.loadComponent),
      mergeMap((action) => {
        if (action.id === 0) {
          return of(ComponentActions.loadComponentSuccess({ component: new DeviceComponent() }));
        } else {
          return this.componentService.getDeviceComponent(action.id).pipe(
            map((data) => {
              return ComponentActions.loadComponentSuccess({ component: data });
            }),
            catchError((error: Error) => {
              this.alertService.error(error.message);
              this.router.navigateByUrl('/admin/information/components');
              return of(ComponentActions.loadComponentError({ error }));
            })
          );
        }
      })
    )
  );

  deleteComponent$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.deleteComponent),
      mergeMap((action) =>
        this.componentService.deleteDeviceComponent(action.id).pipe(
          map((data) => {
            this.alertService.success('Component deleted successfully.');
            return ComponentActions.deleteComponentSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(ComponentActions.deleteComponentError({ error }));
          })
        )
      )
    )
  );

  addComponent$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.addComponent),
      mergeMap((action) => {
        return this.componentService.addDeviceComponent(action.component).pipe(
          map((data) => {
            this.alertService.success('Component added successfully.');
            this.router.navigateByUrl('/admin/information/components');
            return ComponentActions.addComponentSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(ComponentActions.addComponentError({ error }));
          })
        );
      })
    )
  );

  updateComponent$ = createEffect(() =>
    this.action$.pipe(
      ofType(ComponentActions.updateComponent),
      mergeMap((action) => {
        return this.componentService.updateDeviceComponent(action.component).pipe(
          map((data) => {
            this.alertService.success('Component updated successfully.');
            this.router.navigateByUrl('/admin/information/components');
            return ComponentActions.updateComponentSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(ComponentActions.updateComponentError({ error }));
          })
        );
      })
    )
  );
}
