import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from '../../../../_services/device-information.service';

@Component({
  selector: 'app-admin-device-information',
  templateUrl: './admin-device-information.component.html',
  styleUrls: ['./admin-device-information.component.scss'],
})
export class AdminDeviceInformationComponent implements OnInit {
  constructor(private deviceInformationService: DeviceInformationService) {}

  ngOnInit(): void {}

  getDataSource(source: string): string[] {
    if (source === 'kind') {
      return this.deviceInformationService.kinds;
    } else if (source === 'category') {
      return this.deviceInformationService.categories;
    } else if (source === 'component') {
      return this.deviceInformationService.components;
    }
    return [];
  }
}
