import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.scss'],
})
export class AdminCategoryCreateComponent implements OnInit {
  components: string[] = [];
  selectedComponents: any = [];
  panelOpenState: any;

  constructor(private deviceInformationService: DeviceInformationService) {
    this.components = deviceInformationService.components;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.deviceInformationService.addCategories(form.value.name);

    form.resetForm();
  }

  getComponentsFieldHeader(): string {
    if (
      this.selectedComponents == null ||
      this.selectedComponents?.length === 0
    ) {
      return 'Choose components';
    }

    if (this.selectedComponents?.length === 1) {
      return this.selectedComponents;
    }

    return `${this.selectedComponents?.slice(0, 1)} (+${
      this.selectedComponents?.length - 1
    } other)`;
  }
}
