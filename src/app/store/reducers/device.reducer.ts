import { createReducer, on } from '@ngrx/store';
import * as DeviceActions from '../actions/device.actions';

export interface State {}

const initialState: State = {};

export const componentReducer = createReducer(initialState);
