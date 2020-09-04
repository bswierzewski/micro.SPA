import { Component, OnInit, Input } from '@angular/core';
import { AdminDeviceInformationListService } from './admin-device-information-list.service';

@Component({
  selector: 'app-admin-device-information-list',
  templateUrl: './admin-device-information-list.component.html',
  styleUrls: ['./admin-device-information-list.component.scss'],
})
export class AdminDeviceInformationListComponent implements OnInit {
  @Input()
  dataSource: any[] = [];

  selectionList: any;

  constructor(
    adminDeviceInformationListService: AdminDeviceInformationListService
  ) {
    adminDeviceInformationListService.clear.subscribe(() => {
      this.selectionList = null;
    });
  }

  ngOnInit(): void {}

  onRemoveClick(shoe: any): void {
    console.log(shoe);
  }
}
