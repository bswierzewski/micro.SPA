import { createReducer, on } from '@ngrx/store';
import { Kind } from '../../shared/models';
import { KindActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  kinds: Kind[];
  kind: Kind;
  error: any;
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
  on(KindActions.loadKinds, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    kind: null,
    kinds: [],
    error: null,
  })),
  on(KindActions.loadKindsSuccess, (state, payload) => ({
    ...state,
    kinds: payload.kinds,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(KindActions.loadKindsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(KindActions.loadKind, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    kind: null,
    error: null,
  })),
  on(KindActions.loadKindSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    kind: payload.kind,
    error: null,
  })),
  on(KindActions.loadKindError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(KindActions.deleteKind, (state, payload) => ({
    ...state,
  })),
  on(KindActions.deleteKindSuccess, (state, payload) => ({
    ...state,
    kinds: state.kinds.filter((x) => x.id !== payload.id),
  })),
  on(KindActions.deleteKindError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(KindActions.addKind, KindActions.updateKind, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(KindActions.addKindSuccess, KindActions.updateKindSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(KindActions.addKindError, KindActions.updateKindError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getKinds = (state: State) => state.kinds;
export const getKind = (state: State) => state.kind;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
