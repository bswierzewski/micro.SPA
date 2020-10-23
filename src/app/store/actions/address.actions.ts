import { createAction, props } from '@ngrx/store';
import { Address } from '../../shared/models';

export const loadAddresses = createAction('[Device] Load Addresses');
export const loadAddressesSuccess = createAction('[Device] Load Addresses Success', props<{ addresses: Address[] }>());
export const loadAddressesError = createAction('[Device] Load Addresses Error', props<{ error: any }>());
