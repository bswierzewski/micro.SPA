import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Device, Registration } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import * as fromRoot from '../../../../store/app.reducer';
import * as DeviceActions from '../../../../store/actions/device.actions';
import * as RegistrationActions from '../../../../store/actions/registration.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'created', 'address', 'rssi'];

  isLoading$: Observable<boolean>;
  device: Device;
  dataSource = new MatTableDataSource<Registration>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(DeviceActions.loadDevice({ id: Number(params.id) }));
      this.store
        .pipe(
          select(fromRoot.getRegistrations),
          first((registrations) => registrations !== null)
        )
        .subscribe((registrations) => {
          this.dataSource.data = registrations;
        });
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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
