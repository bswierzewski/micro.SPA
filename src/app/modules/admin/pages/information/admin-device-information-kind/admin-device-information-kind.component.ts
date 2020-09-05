import { Component, OnInit } from '@angular/core';
import { DeviceInformationService } from 'src/app/modules/_services/device-information/device-information.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit {
  kinds$: Observable<string[]>;
  selectedKinds: string[] = [];
  constructor(private deviceInformationService: DeviceInformationService) {
    this.kinds$ = deviceInformationService.kindService.kinds$;
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.deviceInformationService.kindService.addKinds(form.value.name);

    form.resetForm();
  }

  onClearClick(): void {
    console.log('Clear ' + this.constructor.name);
  }

  onResetClick(): void {
    console.log('Reset ' + this.constructor.name);
  }
}
