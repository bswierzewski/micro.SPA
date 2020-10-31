import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKind from './reducers/kind.reducer';
import * as fromCategory from './reducers/category.reducer';
import * as fromComponent from './reducers/component.reducer';
import * as fromDevice from './reducers/device.reducer';
import * as fromVersion from './reducers/version.reducer';
import * as fromRegistration from './reducers/registration.reducer';
import * as fromAddress from './reducers/address.reducer';
import * as fromUser from './reducers/user.reducer';
import * as fromRole from './reducers/role.reducer';

export interface State {
  kind: fromKind.State;
  category: fromCategory.State;
  component: fromComponent.State;
  device: fromDevice.State;
  version: fromVersion.State;
  registration: fromRegistration.State;
  address: fromAddress.State;
  user: fromUser.State;
  role: fromRole.State;
}

export const reducers: ActionReducerMap<State> = {
  kind: fromKind.kindReducer,
  category: fromCategory.categoryReducer,
  component: fromComponent.componentReducer,
  device: fromDevice.deviceReducer,
  version: fromVersion.versionReducer,
  registration: fromRegistration.registrationReducer,
  address: fromAddress.addressReducer,
  user: fromUser.userReducer,
  role: fromRole.roleReducer,
};

export const getKindState = createFeatureSelector<fromKind.State>('kind');
export const getKinds = createSelector(getKindState, fromKind.getKinds);
export const getKind = createSelector(getKindState, fromKind.getKind);
export const getIsLoadingKind = createSelector(getKindState, fromKind.getIsLoading);
export const getIsLoadedKind = createSelector(getKindState, fromKind.getIsLoaded);

export const getCategoryState = createFeatureSelector<fromCategory.State>('category');
export const getCategories = createSelector(getCategoryState, fromCategory.getCategories);
export const getCategory = createSelector(getCategoryState, fromCategory.getCategory);
export const getIsLoadingCategory = createSelector(getCategoryState, fromCategory.getIsLoading);
export const getIsLoadedCategory = createSelector(getCategoryState, fromCategory.getIsLoaded);

export const getComponentState = createFeatureSelector<fromComponent.State>('component');
export const getComponents = createSelector(getComponentState, fromComponent.getComponents);
export const getComponent = createSelector(getComponentState, fromComponent.getComponent);
export const getIsLoadingComponent = createSelector(getComponentState, fromComponent.getIsLoading);
export const getIsLoadedComponent = createSelector(getComponentState, fromComponent.getIsLoaded);

export const getDeviceState = createFeatureSelector<fromDevice.State>('device');
export const getDevices = createSelector(getDeviceState, fromDevice.getDevices);
export const getDevice = createSelector(getDeviceState, fromDevice.getDevice);
export const getIsLoadingDevice = createSelector(getDeviceState, fromDevice.getIsLoading);
export const getIsLoadedDevice = createSelector(getDeviceState, fromDevice.getIsLoaded);

export const getVersionState = createFeatureSelector<fromVersion.State>('version');
export const getVersions = createSelector(getVersionState, fromVersion.getVersions);
export const getVersion = createSelector(getVersionState, fromVersion.getVersion);
export const getIsLoadingVersion = createSelector(getVersionState, fromVersion.getIsLoading);
export const getIsLoadedVersion = createSelector(getVersionState, fromVersion.getIsLoaded);

export const getRegistrationState = createFeatureSelector<fromRegistration.State>('registration');
export const getRegistrations = createSelector(getRegistrationState, fromRegistration.getRegistrations);
export const getIsLoadingRegistration = createSelector(getRegistrationState, fromRegistration.getIsLoading);
export const getIsLoadedRegistration = createSelector(getRegistrationState, fromRegistration.getIsLoaded);

export const getAddressState = createFeatureSelector<fromAddress.State>('address');
export const getAddresses = createSelector(getAddressState, fromAddress.getAddresses);
export const getIsLoadingAddress = createSelector(getAddressState, fromAddress.getIsLoading);
export const getIsLoadedAddress = createSelector(getAddressState, fromAddress.getIsLoaded);

export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getIsLoadingUser = createSelector(getUserState, fromUser.getIsLoading);
export const getIsLoadedUser = createSelector(getUserState, fromUser.getIsLoaded);

export const getRoleState = createFeatureSelector<fromRole.State>('role');
export const getRoles = createSelector(getRoleState, fromRole.getRoles);
export const getIsLoadingRoles = createSelector(getRoleState, fromRole.getIsLoading);
export const getIsLoadedRoles = createSelector(getRoleState, fromRole.getIsLoaded);
