import { createReducer, on } from '@ngrx/store';
import { DeviceComponent } from '../../shared/models';
import * as ComponentsActions from '../actions/component.actions';

export interface State {
  isLoading: boolean;
  components: DeviceComponent[];
  error: any;
}

const initialState: State = {
  isLoading: false,
  components: [],
  error: null,
};

export const componentReducer = createReducer(
  initialState,
  on(ComponentsActions.loadComponents, (state, payload) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(ComponentsActions.loadComponentsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    components: payload.components,
    error: null,
  })),
  on(ComponentsActions.loadComponentsError, (state, payload) => ({
    ...state,
    isLoading: false,
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
  }))
);

export const getComponents = (state: State) => state.components;
export const getIsLoadingComponents = (state: State) => state.isLoading;
