import { createReducer, on } from '@ngrx/store';
import { Registration } from '../../shared/models';
import { RegistrationActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  registrations: Registration[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  registrations: [],
  error: null,
};

export const registrationReducer = createReducer(
  initialState,
  on(RegistrationActions.loadRegistrations, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    registrations: [],
    error: null,
  })),
  on(RegistrationActions.loadRegistrationsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    registrations: payload.registrations,
    error: null,
  })),
  on(RegistrationActions.loadRegistrationsError, (state, payload) => ({
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
