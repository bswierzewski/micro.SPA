import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Device } from 'src/app/shared/models';
import { AlertService } from 'src/app/core/services';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import * as DeviceActions from '../../../../store/actions/device.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-admin-device-list',
  templateUrl: './admin-device-list.component.html',
  styleUrls: ['./admin-device-list.component.scss'],
})
export class AdminDeviceListComponent implements OnInit, OnDestroy, AfterViewInit {
  devicesColumns: string[] = ['action', 'name', 'address', 'kind', 'category', 'component'];

  isSubscribe = true;
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<Device>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {
    this.store.dispatch(DeviceActions.loadDevices({}));
    this.store
      .pipe(
        select(fromRoot.getDevices),
        takeWhile((x) => this.isSubscribe)
      )
      .subscribe((devices) => {
        this.dataSource.data = devices;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {
      this.store.dispatch(DeviceActions.deleteDevice({ id }));
    });
  }
}
