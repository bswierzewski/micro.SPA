import { createReducer, on } from '@ngrx/store';
import { Category } from '../../shared/models';
import * as CategoryActions from '../actions/category.actions';

export interface State {
  isLoading: boolean;
  categories: Category[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  categories: [],
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategories, (state, payload) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CategoryActions.loadCategoriesSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    categories: payload.categories,
    error: null,
  })),
  on(CategoryActions.loadCategoriesError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(CategoryActions.deleteCategory, (state, payload) => ({
    ...state,
  })),
  on(CategoryActions.deleteCategorySuccess, (state, payload) => ({
    ...state,
    categories: state.categories.filter((x) => x.id !== payload.id),
  })),
  on(CategoryActions.deleteCategoryError, (state, payload) => ({
    ...state,
    error: payload.error,
  }))
);

export const getCategories = (state: State) => state.categories;
export const getIsLoadingCategories = (state: State) => state.isLoading;
