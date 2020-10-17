import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { Address } from 'src/app/shared/models';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import { AddressActions } from '../../../../store/actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-admin-device-address',
  templateUrl: './admin-device-address.component.html',
  styleUrls: ['./admin-device-address.component.scss'],
})
export class AdminDeviceAddressComponent implements OnInit, OnDestroy, AfterViewInit {
  addressesColumns: string[] = ['action', 'created', 'label'];

  isSubscribe = true;
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<Address>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {
    this.store.dispatch(AddressActions.loadAddresses());
    this.store
      .pipe(
        select(fromRoot.getAddresses),
        takeWhile((x) => this.isSubscribe)
      )
      .subscribe((addresses) => {
        this.dataSource.data = addresses;
      });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {});
  }
}
