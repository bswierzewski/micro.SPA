import { createReducer, on } from '@ngrx/store';
import { Device } from '../../shared/models';
import { DeviceActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  devices: Device[];
  device: Device;
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  devices: [],
  device: null,
  error: null,
};

export const deviceReducer = createReducer(
  initialState,
  on(DeviceActions.loadDevices, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    device: null,
    devices: [],
    error: null,
  })),
  on(DeviceActions.loadDevicesSuccess, (state, payload) => ({
    ...state,
    devices: payload.devices,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(DeviceActions.loadDevicesError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(DeviceActions.loadDevice, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    device: null,
    error: null,
  })),
  on(DeviceActions.loadDeviceSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    device: payload.device,
    error: null,
  })),
  on(DeviceActions.loadDeviceError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(DeviceActions.deleteDevice, (state, payload) => ({
    ...state,
  })),
  on(DeviceActions.deleteDeviceSuccess, (state, payload) => ({
    ...state,
    devices: state.devices.filter((x) => x.id !== payload.id),
  })),
  on(DeviceActions.deleteDeviceError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(DeviceActions.addDevice, DeviceActions.updateDevice, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(DeviceActions.addDeviceSuccess, DeviceActions.updateDeviceSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(DeviceActions.addDeviceError, DeviceActions.updateDeviceError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getDevices = (state: State) => state.devices;
export const getDevice = (state: State) => state.device;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
