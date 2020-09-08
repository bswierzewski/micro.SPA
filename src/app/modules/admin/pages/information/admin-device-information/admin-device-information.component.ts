import { Component, OnInit } from '@angular/core';
import { AdminDeviceInformationService } from './admin-device-information.service';

@Component({
  selector: 'app-admin-device-information',
  templateUrl: './admin-device-information.component.html',
  styleUrls: ['./admin-device-information.component.scss'],
})
export class AdminDeviceInformationComponent implements OnInit {
  selectedItems: any;
  tabItems = [
    { Path: '/admin/devices_information/kind', Name: 'Kind' },
    { Path: '/admin/devices_information/category', Name: 'Category' },
    { Path: '/admin/devices_information/component', Name: 'Component' },
  ];
  constructor(
    public adminDeviceInformationService: AdminDeviceInformationService<any>
  ) {}

  ngOnInit(): void {
    this.adminDeviceInformationService.clearSubject$.subscribe(() => {
      this.selectedItems = null;
    });
  }

  onSelectionChange(): void {
    this.adminDeviceInformationService.selectionChangeSubject$.next(
      this.selectedItems
    );
  }

  onRemoveClick(item: any): void {
    this.adminDeviceInformationService.removeSubject$.next(item);
  }
}
