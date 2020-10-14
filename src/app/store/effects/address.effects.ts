import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AddressService, AlertService } from '../../core/services';
import * as AddressActions from '../actions/address.actions';

@Injectable()
export class AddressEffects {
  constructor(
    private addressService: AddressService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getAddresses$ = createEffect(() =>
    this.action$.pipe(
      ofType(AddressActions.loadAddresses),
      mergeMap((action) =>
        this.addressService.getAddresses().pipe(
          map((data) => {
            return AddressActions.loadAddressesSuccess({ addresses: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(AddressActions.loadAddressesError({ error }));
          })
        )
      )
    )
  );
}
