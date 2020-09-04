import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';
import { AdminDeviceInformationListService } from '../../admin-device-information-list/admin-device-information-list.service';
import { AdminDeviceInformationButtonService } from '../../admin-device-information-button/admin-device-information-button.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-kind-create',
  templateUrl: './admin-kind-create.component.html',
  styleUrls: ['./admin-kind-create.component.scss'],
})
export class AdminKindCreateComponent implements OnInit {
  constructor(
    private deviceInformationService: DeviceInformationService,
    private adminDeviceInformationListService: AdminDeviceInformationListService,
    private adminDeviceInformationButtonService: AdminDeviceInformationButtonService
  ) {}

  ngOnInit(): void {}

  onClearClick(): void {
    this.adminDeviceInformationListService.clear.next();
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.deviceInformationService.addKinds(form.value.name);

    form.resetForm();
  }
}
