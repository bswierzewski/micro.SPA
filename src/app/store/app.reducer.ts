import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKind from './reducers/kind.reducer';
import * as fromCategory from './reducers/category.reducer';
import * as fromComponent from './reducers/component.reducer';
import * as fromDevice from './reducers/device.reducer';
import * as fromVersion from './reducers/version.reducer';

export interface State {
  kind: fromKind.State;
  category: fromCategory.State;
  component: fromComponent.State;
  device: fromDevice.State;
  version: fromVersion.State;
}

export const reducers: ActionReducerMap<State> = {
  kind: fromKind.kindReducer,
  category: fromCategory.categoryReducer,
  component: fromComponent.componentReducer,
  device: fromDevice.deviceReducer,
  version: fromVersion.versionReducer,
};

export const getKindState = createFeatureSelector<fromKind.State>('kind');
export const getKinds = createSelector(getKindState, fromKind.getKinds);
export const getKind = createSelector(getKindState, fromKind.getKind);
export const getIsLoadingKind = createSelector(getKindState, fromKind.getIsLoading);

export const getCategoryState = createFeatureSelector<fromCategory.State>('category');
export const getCategories = createSelector(getCategoryState, fromCategory.getCategories);
export const getCategory = createSelector(getCategoryState, fromCategory.getCategory);
export const getIsLoadingCategory = createSelector(getCategoryState, fromCategory.getIsLoading);

export const getComponentState = createFeatureSelector<fromComponent.State>('component');
export const getComponents = createSelector(getComponentState, fromComponent.getComponents);
export const getComponent = createSelector(getComponentState, fromComponent.getComponent);
export const getIsLoadingComponent = createSelector(getComponentState, fromComponent.getIsLoading);

export const getDeviceState = createFeatureSelector<fromDevice.State>('device');
export const getDevices = createSelector(getDeviceState, fromDevice.getDevices);
export const getDevice = createSelector(getDeviceState, fromDevice.getDevice);
export const getIsLoadingDevice = createSelector(getDeviceState, fromDevice.getIsLoading);

export const getVersionState = createFeatureSelector<fromVersion.State>('version');
export const getVersions = createSelector(getVersionState, fromVersion.getVersions);
export const getVersion = createSelector(getVersionState, fromVersion.getVersion);
export const getIsLoadingVersion = createSelector(getVersionState, fromVersion.getIsLoading);
