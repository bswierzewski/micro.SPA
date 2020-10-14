import { createAction, props } from '@ngrx/store';
import { DeviceParams } from 'src/app/shared/params';
import { Device } from '../../shared/models';

export const loadDevices = createAction('[Device] Load Devices', props<{ params?: DeviceParams }>());
export const loadDevicesSuccess = createAction('[Device] Load Devices Success', props<{ devices: Device[] }>());
export const loadDevicesError = createAction('[Device] Load Devices Error', props<{ error: Error }>());

export const loadDevice = createAction('[Device] Load Device', props<{ id: number }>());
export const loadDeviceSuccess = createAction('[Device] Load Device Success', props<{ device: Device }>());
export const loadDeviceError = createAction('[Device] Load Device Error', props<{ error: Error }>());

export const deleteDevice = createAction('[Device] Delete Device', props<{ id: number }>());
export const deleteDeviceSuccess = createAction('[Device] Delete Device Success', props<{ id: number }>());
export const deleteDeviceError = createAction('[Device] Delete Device Error', props<{ error: Error }>());

export const addDevice = createAction('[Device] Add Device', props<{ device: Device }>());
export const addDeviceSuccess = createAction('[Device] Add Device Success');
export const addDeviceError = createAction('[Device] Add Device Error', props<{ error: Error }>());

export const updateDevice = createAction('[Device] Update Device', props<{ device: Device }>());
export const updateDeviceSuccess = createAction('[Device] Update Device Success');
export const updateDeviceError = createAction('[Device] Update Device Error', props<{ error: Error }>());
