import { createReducer, on } from '@ngrx/store';
import { Kind } from '../../shared/models';
import * as KindsActions from '../actions/kind.actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  kinds: Kind[];
  kind: Kind;
  error: Error;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  kinds: [],
  kind: null,
  error: null,
};

export const kindReducer = createReducer(
  initialState,
  on(KindsActions.loadKinds, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    kind: null,
    kinds: [],
    error: null,
  })),
  on(KindsActions.loadKindsSuccess, (state, payload) => ({
    ...state,
    kinds: payload.kinds,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(KindsActions.loadKindsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(KindsActions.loadKind, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    kind: null,
    error: null,
  })),
  on(KindsActions.loadKindSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    kind: payload.kind,
    error: null,
  })),
  on(KindsActions.loadKindError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(KindsActions.deleteKind, (state, payload) => ({
    ...state,
  })),
  on(KindsActions.deleteKindSuccess, (state, payload) => ({
    ...state,
    kinds: state.kinds.filter((x) => x.id !== payload.id),
  })),
  on(KindsActions.deleteKindError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(KindsActions.addKind, KindsActions.updateKind, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(KindsActions.addKindSuccess, KindsActions.updateKindSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(KindsActions.addKindError, KindsActions.updateKindError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getKinds = (state: State) => state.kinds;
export const getKind = (state: State) => state.kind;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
