import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddressService, AlertService } from 'src/app/core/_services';
import { Address } from 'src/app/shared/models';

@Component({
  selector: 'app-admin-device-address',
  templateUrl: './admin-device-address.component.html',
  styleUrls: ['./admin-device-address.component.scss'],
})
export class AdminDeviceAddressComponent implements AfterViewInit {
  addressesColumns: string[] = ['created', 'label', 'action'];
  dataSource = new MatTableDataSource<Address>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private addressService: AddressService, private alertService: AlertService) {
    this.loadAddresses();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadAddresses(): void {
    this.addressService.getAddresses().subscribe(
      (next) => {
        this.dataSource.data = next;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {});
  }
}
