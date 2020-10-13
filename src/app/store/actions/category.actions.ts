import { createAction, props } from '@ngrx/store';
import { Category } from '../../shared/models';

export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesError = createAction('[Category] Load Categories Error', props<{ error: any }>());

export const loadCategory = createAction('[Category] Load Category', props<{ id: number }>());
export const loadCategorySuccess = createAction('[Category] Load Category Success', props<{ category: Category }>());
export const loadCategoryError = createAction('[Category] Load Category Error', props<{ error: Error }>());

export const deleteCategory = createAction('[Category] Delete Category', props<{ id: number }>());
export const deleteCategorySuccess = createAction('[Category] Delete Category Success', props<{ id: number }>());
export const deleteCategoryError = createAction('[Category] Delete Category Error', props<{ error: any }>());

export const addCategory = createAction('[Category] Add Category', props<{ category: Category }>());
export const addCategorySuccess = createAction('[Category] Add Category Success');
export const addCategoryError = createAction('[Category] Add Category Error', props<{ error: Error }>());

export const updateCategory = createAction('[Category] Update Category', props<{ category: Category }>());
export const updateCategorySuccess = createAction('[Category] Update Category Success');
export const updateCategoryError = createAction('[Category] Update Category Error', props<{ error: Error }>());
