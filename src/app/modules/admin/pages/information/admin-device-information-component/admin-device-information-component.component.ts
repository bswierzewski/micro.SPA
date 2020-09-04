import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent implements OnInit {
  categories: string[] = ['Jeden', 'dwa', 'trzy'];
  components: string[] = ['Jeden', 'dwa', 'trzy'];
  selectedCategory: any = null;
  selectedComponents: any = null;
  panelOpenState: any;
  constructor(private deviceInformationService: DeviceInformationService) {}

  ngOnInit(): void {}

  onClearClick(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.deviceInformationService.addComponents(form.value.name);

    form.resetForm();
  }

  getCategoryiesFieldHeader(): string {
    if (this.selectedCategory === null) {
      return 'Choose category';
    }
    return this.selectedCategory;
  }
}
