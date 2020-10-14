import { createReducer, on } from '@ngrx/store';
import { Category } from '../../shared/models';
import * as CategoryActions from '../actions/category.actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  categories: Category[];
  category: Category;
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  categories: [],
  category: null,
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategories, (state, payload) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    categories: [],
    error: null,
  })),
  on(CategoryActions.loadCategoriesSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    categories: payload.categories,
    error: null,
  })),
  on(CategoryActions.loadCategoriesError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(CategoryActions.loadCategory, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    category: null,
    error: null,
  })),
  on(CategoryActions.loadCategorySuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    category: payload.category,
    error: null,
  })),
  on(CategoryActions.loadCategoryError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
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
  })),
  on(CategoryActions.addCategory, CategoryActions.updateCategory, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(CategoryActions.addCategorySuccess, CategoryActions.updateCategorySuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(CategoryActions.addCategoryError, CategoryActions.updateCategoryError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export const getCategories = (state: State) => state.categories;
export const getCategory = (state: State) => state.category;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
