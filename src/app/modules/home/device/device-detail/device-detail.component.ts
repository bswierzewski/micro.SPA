import { Component, OnInit } from '@angular/core';
import { Device, Registration } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import * as fromRoot from '../../../../store/app.reducer';
import * as DeviceActions from '../../../../store/actions/device.actions';
import * as RegistrationActions from '../../../../store/actions/registration.actions';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit {
  displayedColumns: string[] = ['position', 'created', 'address', 'rssi'];

  isLoading$: Observable<boolean>;
  device: Device;
  registrations$: Observable<Registration[]>;

  constructor(private route: ActivatedRoute, private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.registrations$ = this.store.select(fromRoot.getRegistrations);
      this.store.dispatch(DeviceActions.loadDevice({ id: Number(params.id) }));
      this.store
        .pipe(
          select(fromRoot.getDevice),
          first((device) => device !== null)
        )
        .subscribe((device) => {
          this.device = device;
          this.store.dispatch(RegistrationActions.loadRegistrations({ id: device.id }));
        });
    });
  }
}
