import { Component, OnInit } from '@angular/core';
import { AdminDeviceInformationButtonService } from '../admin-device-information-button/admin-device-information-button.service';

@Component({
  selector: 'app-admin-device-information-button',
  templateUrl: './admin-device-information-button.component.html',
  styleUrls: ['./admin-device-information-button.component.scss'],
})
export class AdminDeviceInformationButtonComponent implements OnInit {
  constructor(
    private adminDeviceInformationButtonService: AdminDeviceInformationButtonService
  ) {}

  ngOnInit(): void {}

  clearClick(): void {
    this.adminDeviceInformationButtonService.clear.next();
  }

  resetClick(): void {
    this.adminDeviceInformationButtonService.reset.next();
  }

  submitClick(): void {
    this.adminDeviceInformationButtonService.submit.next();
  }
}
