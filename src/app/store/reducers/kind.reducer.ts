import { createReducer, on } from '@ngrx/store';
import { Kind } from '../../shared/models';
import * as KindsActions from '../actions/kind.actions';

export interface State {
  isLoading: boolean;
  kinds: Kind[];
  kind: Kind;
  error: any;
}

const initialState: State = {
  isLoading: false,
  kinds: [],
  kind: null,
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
  })),
  on(KindsActions.loadKind, (state, payload) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(KindsActions.loadKindSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    kind: payload.kind,
    error: null,
  })),
  on(KindsActions.loadKindError, (state, payload) => ({
    ...state,
    isLoading: false,
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
  })),
  on(KindsActions.addKindSuccess, KindsActions.updateKindSuccess, (state, payload) => ({
    ...state,
  })),
  on(KindsActions.addKindError, KindsActions.updateKindError, (state, payload) => ({
    ...state,
    error: payload.error,
  }))
);

export const getKinds = (state: State) => state.kinds;
export const getKind = (state: State) => state.kind;
export const getIsLoading = (state: State) => state.isLoading;
