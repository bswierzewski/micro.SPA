import { createReducer, on } from '@ngrx/store';
import { Kind } from '../../shared/models';
import * as KindsActions from '../actions/kind.actions';

export interface State {
  isLoading: boolean;
  kinds: Kind[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  kinds: [],
  error: null,
};

export const kindReducer = createReducer(
  initialState,
  on(KindsActions.loadKinds, (state, payload) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(KindsActions.loadKindsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    kinds: payload.kinds,
    error: null,
  })),
  on(KindsActions.loadKindsError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getKinds = (state: State) => state.kinds;
export const getIsLoadingKinds = (state: State) => state.isLoading;
