import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, DeviceService } from '../../core/services';
import * as DeviceActions from '../actions/device.actions';

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
        this.deviceService.getDevices().pipe(
          map((data) => {
            return DeviceActions.loadDevicesSuccess({ devices: data });
          }),
          catchError((error: Error) => {
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
        return this.deviceService.getDevice(action.id).pipe(
          map((data) => {
            return DeviceActions.loadDeviceSuccess({ device: data });
          }),
          catchError((error: Error) => {
            this.router.navigateByUrl('/admin/devices');
            return of(DeviceActions.loadDeviceError({ error }));
          })
        );
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
            this.router.navigateByUrl('/admin/devices');
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
            this.router.navigateByUrl('/admin/devices');
            return DeviceActions.updateDeviceSuccess();
          }),
          catchError((error: Error) => {
            return of(DeviceActions.updateDeviceError({ error }));
          })
        );
      })
    )
  );
}
