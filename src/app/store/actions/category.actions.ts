import { createAction, props } from '@ngrx/store';
import { Category } from '../../shared/models';

export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesError = createAction('[Category] Load Categories Error', props<{ error: any }>());

export const deleteCategory = createAction('[Category] Delete Category', props<{ id: number }>());
export const deleteCategorySuccess = createAction('[Category] Delete Category Success', props<{ id: number }>());
export const deleteCategoryError = createAction('[Category] Delete Category Error', props<{ error: any }>());
