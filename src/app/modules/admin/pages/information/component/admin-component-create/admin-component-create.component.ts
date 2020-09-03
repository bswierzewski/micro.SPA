import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';

@Component({
  selector: 'app-admin-component-create',
  templateUrl: './admin-component-create.component.html',
  styleUrls: ['./admin-component-create.component.scss'],
})
export class AdminComponentCreateComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: any = null;
  panelOpenState: any;
  constructor(private deviceInformationService: DeviceInformationService) {
    this.categories = deviceInformationService.categories;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
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
