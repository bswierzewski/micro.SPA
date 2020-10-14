import { createReducer, on } from '@ngrx/store';
import { Registration } from '../../shared/models';
import * as RegistrationsActions from '../actions/registration.actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  registrations: Registration[];
  error: Error;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  registrations: [],
  error: null,
};

export const registrationReducer = createReducer(
  initialState,
  on(RegistrationsActions.loadRegistrations, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    registrations: [],
    error: null,
  })),
  on(RegistrationsActions.loadRegistrationsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    registrations: payload.registrations,
    error: null,
  })),
  on(RegistrationsActions.loadRegistrationsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    registrations: [],
    error: payload.error,
  }))
);

export const getRegistrations = (state: State) => state.registrations;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
