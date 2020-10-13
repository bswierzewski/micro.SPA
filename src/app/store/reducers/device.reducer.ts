import { createReducer, on } from '@ngrx/store';
import { Device } from '../../shared/models';
import * as DevicesActions from '../actions/device.actions';

export interface State {
  isLoading: boolean;
  devices: Device[];
  device: Device;
  error: Error;
}

const initialState: State = {
  isLoading: false,
  devices: [],
  device: null,
  error: null,
};

export const deviceReducer = createReducer(
  initialState,
  on(DevicesActions.loadDevices, (state) => ({
    ...state,
    isLoading: true,
    device: null,
    devices: [],
    error: null,
  })),
  on(DevicesActions.loadDevicesSuccess, (state, payload) => ({
    ...state,
    devices: payload.devices,
    isLoading: false,
    error: null,
  })),
  on(DevicesActions.loadDevicesError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(DevicesActions.loadDevice, (state) => ({
    ...state,
    isLoading: true,
    device: null,
    error: null,
  })),
  on(DevicesActions.loadDeviceSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    device: payload.device,
    error: null,
  })),
  on(DevicesActions.loadDeviceError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(DevicesActions.deleteDevice, (state, payload) => ({
    ...state,
  })),
  on(DevicesActions.deleteDeviceSuccess, (state, payload) => ({
    ...state,
    devices: state.devices.filter((x) => x.id !== payload.id),
  })),
  on(DevicesActions.deleteDeviceError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(DevicesActions.addDevice, DevicesActions.updateDevice, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(DevicesActions.addDeviceSuccess, DevicesActions.updateDeviceSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(DevicesActions.addDeviceError, DevicesActions.updateDeviceError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getDevices = (state: State) => state.devices;
export const getDevice = (state: State) => state.device;
export const getIsLoading = (state: State) => state.isLoading;
