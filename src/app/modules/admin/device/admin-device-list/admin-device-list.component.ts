import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Device } from 'src/app/shared/models';
import {
  AddressService,
  DeviceService,
  AlertService,
} from 'src/app/core/_services';

@Component({
  selector: 'app-admin-device-list',
  templateUrl: './admin-device-list.component.html',
  styleUrls: ['./admin-device-list.component.scss'],
})
export class AdminDeviceListComponent implements OnInit {
  displayedKnowColumns: string[] = [
    'name',
    'deviceComponent',
    'kind',
    'action',
  ];
  displayedUnKnowColumns: string[] = ['created', 'label', 'action'];

  unKnowDataSource$: Observable<Address[]>;
  knownDataSource$: Observable<Device[]>;

  constructor(
    private addressService: AddressService,
    private deviceService: DeviceService,
    private alertService: AlertService
  ) {
    this.unKnowDataSource$ = addressService.getAddresses();
    this.knownDataSource$ = deviceService.getDevices();
  }

  ngOnInit(): void {}

  onRemoveClick(id: number): void {
    this.alertService.confirm("Really wan't delete this device?", () => {
      this.deviceService.deleteDevice(id).subscribe((next) => {
        this.knownDataSource$ = this.deviceService.getDevices();
      });
    });
  }
}
