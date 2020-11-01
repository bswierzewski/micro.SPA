import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersError = createAction('[User] Load Users Error', props<{ error: any }>());

export const loadUser = createAction('[User] Load User', props<{ id: number }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());
export const loadUserError = createAction('[User] Load User Error', props<{ error: any }>());

export const registerUser = createAction('[User] Register User', props<{ user: User }>());
export const registerUserSuccess = createAction('[User] Register User Success');
export const registerUserError = createAction('[User] Register User Error', props<{ error: any }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[User] Update User Success');
export const updateUserError = createAction('[User] Update User Error', props<{ error: any }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success');
export const deleteUserError = createAction('[User] Delete User Error', props<{ error: any }>());
