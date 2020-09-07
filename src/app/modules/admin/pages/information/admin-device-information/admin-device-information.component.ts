import { Component, OnInit } from '@angular/core';
import { AdminDeviceInformationService } from './admin-device-information.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-device-information',
  templateUrl: './admin-device-information.component.html',
  styleUrls: ['./admin-device-information.component.scss'],
})
export class AdminDeviceInformationComponent implements OnInit {
  tabItems = [
    { Path: '/admin/devices_information/kind', Name: 'Kind' },
    { Path: '/admin/devices_information/category', Name: 'Category' },
    { Path: '/admin/devices_information/component', Name: 'Component' },
  ];
  constructor(
    public adminDeviceInformationService: AdminDeviceInformationService<any>
  ) {}

  ngOnInit(): void {}
}
