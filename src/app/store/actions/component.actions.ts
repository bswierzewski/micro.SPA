import { createAction, props } from '@ngrx/store';
import { DeviceComponent } from '../../shared/models';

export const loadComponents = createAction('[Component] Load Components');
export const loadComponentsSuccess = createAction(
  '[Component] Load Components Success',
  props<{ components: DeviceComponent[] }>()
);
export const loadComponentsError = createAction('[Component] Load Components Error', props<{ error: any }>());

export const deleteComponent = createAction('[Component] Delete Component', props<{ id: number }>());
export const deleteComponentSuccess = createAction('[Component] Delete Component Success', props<{ id: number }>());
export const deleteComponentError = createAction('[Component] Delete Component Error', props<{ error: any }>());
