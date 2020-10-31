import { createReducer, on } from '@ngrx/store';
import { Role } from '../../shared/models';
import { RoleActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  roles: Role[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  roles: [],
  error: null,
};

export const roleReducer = createReducer(
  initialState,
  on(RoleActions.loadRoles, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    role: null,
    roles: [],
    error: null,
  })),
  on(RoleActions.loadRolesSuccess, (state, payload) => ({
    ...state,
    roles: payload.roles,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(RoleActions.loadRolesError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(RoleActions.deleteRole, (state, payload) => ({
    ...state,
  })),
  on(RoleActions.deleteRoleSuccess, (state, payload) => ({
    ...state,
    roles: state.roles.filter((x) => x.id !== payload.id),
  })),
  on(RoleActions.deleteRoleError, (state, payload) => ({
    ...state,
    error: payload.error,
  }))
);

export const getRoles = (state: State) => state.roles;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
