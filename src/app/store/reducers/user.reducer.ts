import { createReducer, on } from '@ngrx/store';
import { User } from '../../shared/models';
import { UsersActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  users: User[];
  error: Error;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    registrations: [],
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    users: payload.users,
    error: null,
  })),
  on(UsersActions.loadUsersError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    users: [],
    error: payload.error,
  })),
  on(UsersActions.activateUser, (state, payload) => ({
    ...state,
  })),
  on(UsersActions.activateUserSuccess, (state, payload) => ({
    ...state,
  })),
  on(UsersActions.activateUserError, (state, payload) => ({
    ...state,
  }))
);

export const getUsers = (state: State) => state.users;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
