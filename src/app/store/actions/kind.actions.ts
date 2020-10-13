import { createAction, props } from '@ngrx/store';
import { Kind } from '../../shared/models';

export const loadKinds = createAction('[Kind] Load Kinds');
export const loadKindsSuccess = createAction('[Kind] Load Kinds Success', props<{ kinds: Kind[] }>());
export const loadKindsError = createAction('[Kind] Load Kinds Error', props<{ error: any }>());

export const loadKind = createAction('[Kind] Load Kind', props<{ id: number }>());
export const loadKindSuccess = createAction('[Kind] Load Kind Success', props<{ kind: Kind }>());
export const loadKindError = createAction('[Kind] Load Kind Error', props<{ error: Error }>());

export const deleteKind = createAction('[Kind] Delete Kind', props<{ id: number }>());
export const deleteKindSuccess = createAction('[Kind] Delete Kind Success', props<{ id: number }>());
export const deleteKindError = createAction('[Kind] Delete Kind Error', props<{ error: Error }>());

export const addKind = createAction('[Kind] Add Kind', props<{ kind: Kind }>());
export const addKindSuccess = createAction('[Kind] Add Kind Success');
export const addKindError = createAction('[Kind] Add Kind Error', props<{ error: Error }>());

export const updateKind = createAction('[Kind] Update Kind', props<{ kind: Kind }>());
export const updateKindSuccess = createAction('[Kind] Update Kind Success');
export const updateKindError = createAction('[Kind] Update Kind Error', props<{ error: Error }>());
