import { createReducer, on } from '@ngrx/store';
import { DeviceComponent } from '../../shared/models';
import { ComponentActions } from '../actions';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  components: DeviceComponent[];
  component: DeviceComponent;
  error: any;
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  components: [],
  component: null,
  error: null,
};

export const componentReducer = createReducer(
  initialState,
  on(ComponentActions.loadComponents, (state, payload) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    components: [],
    error: null,
  })),
  on(ComponentActions.loadComponentsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    components: payload.components,
    error: null,
  })),
  on(ComponentActions.loadComponentsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(ComponentActions.loadComponent, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    component: null,
    error: null,
  })),
  on(ComponentActions.loadComponentSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    component: payload.component,
    error: null,
  })),
  on(ComponentActions.loadComponentError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(ComponentActions.deleteComponent, (state, payload) => ({
    ...state,
  })),
  on(ComponentActions.deleteComponentSuccess, (state, payload) => ({
    ...state,
    components: state.components.filter((x) => x.id !== payload.id),
  })),
  on(ComponentActions.deleteComponentError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(ComponentActions.addComponent, ComponentActions.updateComponent, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(ComponentActions.addComponentSuccess, ComponentActions.updateComponentSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(ComponentActions.addComponentError, ComponentActions.updateComponentError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(ComponentActions.clear, (state, payload) => ({
    ...initialState,
  }))
);

export const getComponents = (state: State) => state.components;
export const getComponent = (state: State) => state.component;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
