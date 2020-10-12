import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKind from './reducers/kind.reducer';
import * as fromCategory from './reducers/category.reducer';
import * as fromComponent from './reducers/component.reducer';

export interface State {
  kind: fromKind.State;
  category: fromCategory.State;
  component: fromComponent.State;
}

export const reducers: ActionReducerMap<State> = {
  kind: fromKind.kindReducer,
  category: fromCategory.categoryReducer,
  component: fromComponent.componentReducer,
};

export const getKindState = createFeatureSelector<fromKind.State>('kind');
export const getKinds = createSelector(getKindState, fromKind.getKinds);
export const getKind = createSelector(getKindState, fromKind.getKind);
export const getIsLoadingKind = createSelector(getKindState, fromKind.getIsLoading);

export const getCategoryState = createFeatureSelector<fromCategory.State>('category');
export const getCategories = createSelector(getCategoryState, fromCategory.getCategories);
export const getIsLoadingCategories = createSelector(getCategoryState, fromCategory.getIsLoadingCategories);

export const getComponentState = createFeatureSelector<fromComponent.State>('component');
export const getComponents = createSelector(getComponentState, fromComponent.getComponents);
export const getIsLoadingComponents = createSelector(getComponentState, fromComponent.getIsLoadingComponents);
