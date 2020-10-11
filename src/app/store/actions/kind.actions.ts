import { createAction, props } from '@ngrx/store';
import { Kind } from '../../shared/models';

export const loadKinds = createAction('[Kind] Load Kinds');
export const loadKindsSuccess = createAction('[Kind] Load Kinds Success', props<{ kinds: Kind[] }>());
export const loadKindsError = createAction('[Kind] Load Kinds Error', props<{ error: any }>());
