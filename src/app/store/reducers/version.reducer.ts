import { createReducer, on } from '@ngrx/store';
import { Version } from '../../shared/models';
import * as VersionsActions from '../actions/version.actions';

export interface State {
  isLoading: boolean;
  versions: Version[];
  version: Version;
  error: Error;
}

const initialState: State = {
  isLoading: false,
  versions: [],
  version: null,
  error: null,
};

export const versionReducer = createReducer(
  initialState,
  on(VersionsActions.loadVersions, (state) => ({
    ...state,
    isLoading: true,
    version: null,
    versions: [],
    error: null,
  })),
  on(VersionsActions.loadVersionsSuccess, (state, payload) => ({
    ...state,
    versions: payload.versions,
    isLoading: false,
    error: null,
  })),
  on(VersionsActions.loadVersionsError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(VersionsActions.loadVersion, (state) => ({
    ...state,
    isLoading: true,
    version: null,
    error: null,
  })),
  on(VersionsActions.loadVersionSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    version: payload.version,
    error: null,
  })),
  on(VersionsActions.loadVersionError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(VersionsActions.deleteVersion, (state, payload) => ({
    ...state,
  })),
  on(VersionsActions.deleteVersionSuccess, (state, payload) => ({
    ...state,
    versions: state.versions.filter((x) => x.id !== payload.id),
  })),
  on(VersionsActions.deleteVersionError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(VersionsActions.addVersion, VersionsActions.updateVersion, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(VersionsActions.addVersionSuccess, VersionsActions.updateVersionSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(VersionsActions.addVersionError, VersionsActions.updateVersionError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getVersions = (state: State) => state.versions;
export const getVersion = (state: State) => state.version;
export const getIsLoading = (state: State) => state.isLoading;
