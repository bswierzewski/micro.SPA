import { createReducer, on } from '@ngrx/store';
import { Role } from '../../shared/models';
import { RoleActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  isAdding: boolean;
  isAdded: boolean;
  isDeleting: boolean;
  isDeleted: boolean;
  roles: Role[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  isAdding: false,
  isAdded: false,
  isDeleting: false,
  isDeleted: false,
  roles: [],
  error: null,
};

export const roleReducer = createReducer(
  initialState,
  on(RoleActions.loadRoles, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    isAdding: false,
    isAdded: false,
    isDeleting: false,
    isDeleted: false,
    roles: [],
    error: null,
  })),
  on(RoleActions.loadRolesSuccess, (state, payload) => ({
    ...state,
    roles: payload.roles,
    isLoading: false,
    isLoaded: true,
    isAdding: false,
    isAdded: false,
    isDeleting: false,
    isDeleted: false,
    error: null,
  })),
  on(RoleActions.loadRolesError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    isAdding: false,
    isAdded: false,
    isDeleting: false,
    isDeleted: false,
    error: payload.error,
  })),
  on(RoleActions.addRole, (state, payload) => ({
    ...state,
    isAdding: true,
    isAdded: false,
    isLoading: false,
    isLoaded: false,
    isDeleting: false,
    isDeleted: false,
  })),
  on(RoleActions.addRoleSuccess, (state, payload) => ({
    ...state,
    isAdding: false,
    isAdded: true,
    isLoading: false,
    isLoaded: false,
    isDeleting: false,
    isDeleted: false,
  })),
  on(RoleActions.addRoleError, (state, payload) => ({
    ...state,
    isAdding: false,
    isAdded: false,
    isLoading: false,
    isLoaded: false,
    isDeleting: false,
    isDeleted: false,
    error: payload.error,
  })),
  on(RoleActions.deleteRole, (state, payload) => ({
    ...state,
    isAdding: false,
    isAdded: false,
    isLoading: false,
    isLoaded: false,
    isDeleting: true,
    isDeleted: false,
  })),
  on(RoleActions.deleteRoleSuccess, (state, payload) => ({
    ...state,
    roles: state.roles.filter((x) => x.id !== payload.id),
    isAdding: false,
    isAdded: false,
    isLoading: false,
    isLoaded: false,
    isDeleting: false,
    isDeleted: true,
  })),
  on(RoleActions.deleteRoleError, (state, payload) => ({
    ...state,
    error: payload.error,
    isAdding: false,
    isAdded: false,
    isLoading: false,
    isLoaded: false,
    isDeleting: true,
    isDeleted: false,
  }))
);

export const getRoles = (state: State) => state.roles;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
export const getIsAdding = (state: State) => state.isAdding;
export const getIsAdded = (state: State) => state.isAdded;
export const getIsDeleting = (state: State) => state.isDeleting;
export const getIsDeleted = (state: State) => state.isDeleted;
