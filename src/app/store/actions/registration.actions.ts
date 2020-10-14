import { createAction, props } from '@ngrx/store';
import { Registration } from '../../shared/models';

export const loadRegistrations = createAction('[Registration] Load Registrations', props<{ id: number }>());
export const loadRegistrationsSuccess = createAction(
  '[Registration] Load Registrations Success',
  props<{ registrations: Registration[] }>()
);
export const loadRegistrationsError = createAction('[Registration] Load Registrations Error', props<{ error: any }>());
