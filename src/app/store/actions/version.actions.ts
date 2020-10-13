import { createAction, props } from '@ngrx/store';
import { Version } from '../../shared/models';

export const loadVersions = createAction('[Version] Load Versions');
export const loadVersionsSuccess = createAction('[Version] Load Versions Success', props<{ versions: Version[] }>());
export const loadVersionsError = createAction('[Version] Load Versions Error', props<{ error: Error }>());

export const loadVersion = createAction('[Version] Load Version', props<{ id: number }>());
export const loadVersionSuccess = createAction('[Version] Load Version Success', props<{ version: Version }>());
export const loadVersionError = createAction('[Version] Load Version Error', props<{ error: Error }>());

export const deleteVersion = createAction('[Version] Delete Version', props<{ id: number }>());
export const deleteVersionSuccess = createAction('[Version] Delete Version Success', props<{ id: number }>());
export const deleteVersionError = createAction('[Version] Delete Version Error', props<{ error: Error }>());

export const addVersion = createAction('[Version] Add Version', props<{ version: Version; file: File }>());
export const addVersionSuccess = createAction('[Version] Add Version Success');
export const addVersionError = createAction('[Version] Add Version Error', props<{ error: Error }>());

export const updateVersion = createAction('[Version] Update Version', props<{ id: number; version: Version }>());
export const updateVersionSuccess = createAction('[Version] Update Version Success');
export const updateVersionError = createAction('[Version] Update Version Error', props<{ error: Error }>());
