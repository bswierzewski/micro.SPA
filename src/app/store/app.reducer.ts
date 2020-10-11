import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKind from './reducers/kind.reducer';

export interface State {
  kind: fromKind.State;
}

export const reducers: ActionReducerMap<State> = {
  kind: fromKind.kindReducer,
};

export const getKindState = createFeatureSelector<fromKind.State>('kind');
export const getKinds = createSelector(getKindState, fromKind.getKinds);
export const getIsLoadingKinds = createSelector(getKindState, fromKind.getIsLoadingKinds);
