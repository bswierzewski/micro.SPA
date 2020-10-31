import { createAction, props } from '@ngrx/store';
import { Role } from '../../shared/models';

export const loadRoles = createAction('[Role] Load Roles');
export const loadRolesSuccess = createAction('[Role] Load Roles Success', props<{ roles: Role[] }>());
export const loadRolesError = createAction('[Role] Load Roles Error', props<{ error: any }>());

export const deleteRole = createAction('[Role] Delete Role', props<{ id: number }>());
export const deleteRoleSuccess = createAction('[Role] Delete Role Success', props<{ id: number }>());
export const deleteRoleError = createAction('[Role] Delete Role Error', props<{ error: any }>());

export const addRole = createAction('[Role] Add Role', props<{ role: Role }>());
export const addRoleSuccess = createAction('[Role] Add Role Success');
export const addRoleError = createAction('[Role] Add Role Error', props<{ error: any }>());
