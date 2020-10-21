import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersError = createAction('[User] Load Users Error', props<{ error: Error }>());

export const activateUser = createAction('[User] Update User', props<{ user: User }>());
export const activateUserSuccess = createAction('[User] Update User Success');
export const activateUserError = createAction('[User] Update User Error', props<{ error: Error }>());
