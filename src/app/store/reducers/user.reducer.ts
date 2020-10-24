import { createReducer, on } from '@ngrx/store';
import { User } from '../../shared/models';
import { UsersActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  users: User[];
  user: User;
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  users: [],
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    users: [],
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    users: payload.users,
    error: '',
  })),
  on(UsersActions.loadUsersError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    users: [],
    error: payload.error,
  })),
  on(UsersActions.loadUser, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    user: null,
    error: null,
  })),
  on(UsersActions.loadUserSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    user: payload.user,
    error: null,
  })),
  on(UsersActions.loadUserError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    user: null,
    error: payload.error,
  })),
  on(UsersActions.registerUser, (state, payload) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(UsersActions.registerUserSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(UsersActions.registerUserError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(UsersActions.activateUser, (state, payload) => ({
    ...state,
  })),
  on(UsersActions.activateUserSuccess, (state, payload) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === payload.user.id) {
        user = { ...user };
        user.isActive = !user.isActive;
      }
      return user;
    }),
  })),
  on(UsersActions.activateUserError, (state, payload) => ({
    ...state,
    error: payload.error,
  }))
);

export const getUsers = (state: State) => state.users;
export const getUser = (state: State) => state.user;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
