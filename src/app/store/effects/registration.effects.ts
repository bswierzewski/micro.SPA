import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertService, RegistrationService } from 'src/app/core/services';
import { RegistrationActions } from '../actions';

@Injectable()
export class RegistrationEffects {
  constructor(
    private registrationService: RegistrationService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getRegistrations$ = createEffect(() =>
    this.action$.pipe(
      ofType(RegistrationActions.loadRegistrations),
      mergeMap((action) =>
        this.registrationService.getRegistrations(action.id).pipe(
          map((data) => {
            return RegistrationActions.loadRegistrationsSuccess({ registrations: data });
          }),
          catchError((error: any) => {
            this.alertService.error(error);
            return of(RegistrationActions.loadRegistrationsError({ error }));
          })
        )
      )
    )
  );
}
