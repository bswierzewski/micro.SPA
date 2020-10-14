import { createReducer, on } from '@ngrx/store';
import { DeviceComponent } from '../../shared/models';
import * as ComponentsActions from '../actions/component.actions';

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
  on(ComponentsActions.loadComponents, (state, payload) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    components: [],
    error: null,
  })),
  on(ComponentsActions.loadComponentsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    components: payload.components,
    error: null,
  })),
  on(ComponentsActions.loadComponentsError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(ComponentsActions.loadComponent, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    component: null,
    error: null,
  })),
  on(ComponentsActions.loadComponentSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    component: payload.component,
    error: null,
  })),
  on(ComponentsActions.loadComponentError, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: payload.error,
  })),
  on(ComponentsActions.deleteComponent, (state, payload) => ({
    ...state,
  })),
  on(ComponentsActions.deleteComponentSuccess, (state, payload) => ({
    ...state,
    components: state.components.filter((x) => x.id !== payload.id),
  })),
  on(ComponentsActions.deleteComponentError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(ComponentsActions.addComponent, ComponentsActions.updateComponent, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(ComponentsActions.addComponentSuccess, ComponentsActions.updateComponentSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(ComponentsActions.addComponentError, ComponentsActions.updateComponentError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(ComponentsActions.clear, (state, payload) => ({
    ...initialState,
  }))
);

export const getComponents = (state: State) => state.components;
export const getComponent = (state: State) => state.component;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
