import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information.service';
@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.scss'],
})
export class AdminCategoryCreateComponent implements OnInit {
  categories: string[] = ['1', '2', '3', '4'];
  components: string[] = ['1', '2', '3', '4'];
  selectedComponents: any = [];
  selectedCategories: any = [];
  panelOpenState: any;

  constructor(private deviceInformationService: DeviceInformationService) {}

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
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
