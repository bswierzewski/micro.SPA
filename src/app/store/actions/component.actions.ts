import { createAction, props } from '@ngrx/store';
import { DeviceComponent } from '../../shared/models';

export const loadComponents = createAction('[Component] Load Components', props<{ id?: number }>());
export const loadComponentsSuccess = createAction(
  '[Component] Load Components Success',
  props<{ components: DeviceComponent[] }>()
);
export const loadComponentsError = createAction('[Component] Load Components Error', props<{ error: any }>());

export const loadComponent = createAction('[Component] Load Component', props<{ id: number }>());
export const loadComponentSuccess = createAction(
  '[Component] Load Component Success',
  props<{ component: DeviceComponent }>()
);
export const loadComponentError = createAction('[Component] Load Component Error', props<{ error: Error }>());

export const deleteComponent = createAction('[Component] Delete Component', props<{ id: number }>());
export const deleteComponentSuccess = createAction('[Component] Delete Component Success', props<{ id: number }>());
export const deleteComponentError = createAction('[Component] Delete Component Error', props<{ error: any }>());

export const addComponent = createAction('[Component] Add Component', props<{ component: DeviceComponent }>());
export const addComponentSuccess = createAction('[Component] Add Component Success');
export const addComponentError = createAction('[Component] Add Component Error', props<{ error: Error }>());

export const updateComponent = createAction('[Component] Update Component', props<{ component: DeviceComponent }>());
export const updateComponentSuccess = createAction('[Component] Update Component Success');
export const updateComponentError = createAction('[Component] Update Component Error', props<{ error: Error }>());

export const clear = createAction('[Component] Clear');
