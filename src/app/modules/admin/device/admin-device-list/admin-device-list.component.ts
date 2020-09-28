import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Device } from 'src/app/shared/models';
import { AddressService, DeviceService, AlertService } from 'src/app/core/_services';

@Component({
  selector: 'app-admin-device-list',
  templateUrl: './admin-device-list.component.html',
  styleUrls: ['./admin-device-list.component.scss'],
})
export class AdminDeviceListComponent implements OnInit {
  devicesColumns: string[] = ['name', 'kind', 'category', 'component', 'action'];
  devices$: Observable<Device[]>;

  constructor(private deviceService: DeviceService, private alertService: AlertService) {
    this.devices$ = deviceService.getDevices();
  }

  ngOnInit(): void {}

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {
      this.deviceService.deleteDevice(id).subscribe((next) => {
        this.devices$ = this.deviceService.getDevices();
      });
    });
  }
}
