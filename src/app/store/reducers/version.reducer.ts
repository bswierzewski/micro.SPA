import { createReducer, on } from '@ngrx/store';
import { Version } from '../../shared/models';
import { VersionActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  versions: Version[];
  version: Version;
  error: Error;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  versions: [],
  version: null,
  error: null,
};

export const versionReducer = createReducer(
  initialState,
  on(VersionActions.loadVersions, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    versions: [],
    error: null,
  })),
  on(VersionActions.loadVersionsSuccess, (state, payload) => ({
    ...state,
    versions: payload.versions,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(VersionActions.loadVersionsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(VersionActions.loadVersion, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    version: null,
    error: null,
  })),
  on(VersionActions.loadVersionSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    version: payload.version,
    error: null,
  })),
  on(VersionActions.loadVersionError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(VersionActions.deleteVersion, (state, payload) => ({
    ...state,
  })),
  on(VersionActions.deleteVersionSuccess, (state, payload) => ({
    ...state,
    versions: state.versions.filter((x) => x.id !== payload.id),
  })),
  on(VersionActions.deleteVersionError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(VersionActions.addVersion, VersionActions.updateVersion, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(VersionActions.addVersionSuccess, VersionActions.updateVersionSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(VersionActions.addVersionError, VersionActions.updateVersionError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getVersions = (state: State) => state.versions;
export const getVersion = (state: State) => state.version;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
