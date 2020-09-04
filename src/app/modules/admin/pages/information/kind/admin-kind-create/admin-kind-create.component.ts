import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-kind-create',
  templateUrl: './admin-kind-create.component.html',
  styleUrls: ['./admin-kind-create.component.scss'],
})
export class AdminKindCreateComponent implements OnInit {
  kinds: string[] = ['1', '2', '3'];
  selectedKinds: string[] = [];
  constructor(private deviceInformationService: DeviceInformationService) {}

  ngOnInit(): void {}

  onClearClick(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.deviceInformationService.addKinds(form.value.name);

    form.resetForm();
  }
}
