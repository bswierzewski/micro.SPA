import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from '../../../../../_services/device-information.service';

@Component({
  selector: 'app-admin-kind-list',
  templateUrl: './admin-kind-list.component.html',
  styleUrls: ['./admin-kind-list.component.scss'],
})
export class AdminKindListComponent implements OnInit {
  kinds: string[];
  selectionList: any;
  constructor(private deviceInformationService: DeviceInformationService) {
    this.kinds = deviceInformationService.kinds;
  }

  ngOnInit(): void {}

  add(): void {
    this.selectionList = null;
  }

  onLogger(shoe: any): void {
    console.log(shoe);
  }
}
