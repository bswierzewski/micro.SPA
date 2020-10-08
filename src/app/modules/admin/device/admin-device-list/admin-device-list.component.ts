import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DeviceForList } from 'src/app/shared/models';
import { DeviceService, AlertService } from 'src/app/core/services';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-device-list',
  templateUrl: './admin-device-list.component.html',
  styleUrls: ['./admin-device-list.component.scss'],
})
export class AdminDeviceListComponent implements AfterViewInit {
  devicesColumns: string[] = ['name', 'address', 'kind', 'category', 'component', 'action'];
  dataSource = new MatTableDataSource<DeviceForList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private deviceService: DeviceService, private alertService: AlertService) {
    this.loadDevices();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe(
      (next) => {
        this.dataSource.data = next;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {
      this.deviceService.deleteDevice(id).subscribe((next) => {
        this.loadDevices();
      });
    });
  }
}
