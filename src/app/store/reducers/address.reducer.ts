import { createReducer, on } from '@ngrx/store';
import { Address } from '../../shared/models';
import * as AddressActions from '../actions/address.actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  addresses: Address[];
  error: Error;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  addresses: [],
  error: null,
};

export const addressReducer = createReducer(
  initialState,
  on(AddressActions.loadAddresses, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    addresses: [],
    error: null,
  })),
  on(AddressActions.loadAddressesSuccess, (state, payload) => ({
    ...state,
    addresses: payload.addresses,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(AddressActions.loadAddressesError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  }))
);

export const getAddresses = (state: State) => state.addresses;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
