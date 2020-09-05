import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information/device-information.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-device-information-category',
  templateUrl: './admin-device-information-category.component.html',
  styleUrls: ['./admin-device-information-category.component.scss'],
})
export class AdminDeviceInformationCategoryComponent implements OnInit {
  categories$: Observable<string[]>;
  components$: Observable<string[]>;
  selectedComponents: any = [];
  selectedCategories: any = [];
  panelOpenState: any;

  constructor(private deviceInformationService: DeviceInformationService) {
    this.categories$ = deviceInformationService.categoryService.categories$;
    this.components$ = deviceInformationService.componentService.components$;
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.deviceInformationService.categoryService.addCategories(
      form.value.name
    );

    form.resetForm();
  }

  onClearClick(): void {
    console.log('Clear ' + this.constructor.name);
  }

  onResetClick(): void {
    console.log('Reset ' + this.constructor.name);
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
