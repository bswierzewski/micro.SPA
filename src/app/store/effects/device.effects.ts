import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Device } from 'src/app/shared/models';
import { AlertService, DeviceService } from '../../core/services';
import { DeviceActions } from '../actions';

@Injectable()
export class DeviceEffects {
  constructor(
    private deviceService: DeviceService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getDevices$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeviceActions.loadDevices),
      mergeMap((action) =>
        this.deviceService.getDevices(action.params).pipe(
          map((data) => {
            return DeviceActions.loadDevicesSuccess({ devices: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(DeviceActions.loadDevicesError({ error }));
          })
        )
      )
    )
  );

  getDevice$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeviceActions.loadDevice),
      mergeMap((action) => {
        if (action.id === 0) {
          return of(DeviceActions.loadDeviceSuccess({ device: new Device() }));
        } else {
          return this.deviceService.getDevice(action.id).pipe(
            map((data) => {
              return DeviceActions.loadDeviceSuccess({ device: data });
            }),
            catchError((error: Error) => {
              this.alertService.error(error.message);
              return of(DeviceActions.loadDeviceError({ error }));
            })
          );
        }
      })
    )
  );

  deleteDevice$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeviceActions.deleteDevice),
      mergeMap((action) =>
        this.deviceService.deleteDevice(action.id).pipe(
          map((data) => {
            return DeviceActions.deleteDeviceSuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(DeviceActions.deleteDeviceError({ error }));
          })
        )
      )
    )
  );

  addDevice$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeviceActions.addDevice),
      mergeMap((action) => {
        return this.deviceService.addDevice(action.device).pipe(
          map((data) => {
            this.alertService.success('Device added');
            this.router.navigateByUrl('/settings/devices');
            return DeviceActions.addDeviceSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(DeviceActions.addDeviceError({ error }));
          })
        );
      })
    )
  );

  updateDevice$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeviceActions.updateDevice),
      mergeMap((action) => {
        return this.deviceService.updateDevice(action.device).pipe(
          map((data) => {
            this.alertService.success('Device updated');
            this.router.navigateByUrl('/settings/devices');
            return DeviceActions.updateDeviceSuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(DeviceActions.updateDeviceError({ error }));
          })
        );
      })
    )
  );
}
