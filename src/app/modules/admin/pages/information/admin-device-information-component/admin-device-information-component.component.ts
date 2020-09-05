import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceInformationService } from 'src/app/modules/_services/device-information/device-information.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent implements OnInit {
  categories$: Observable<string[]>;
  components$: Observable<string[]>;
  selectedCategory: any = null;
  selectedComponents: any = null;
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

    this.deviceInformationService.componentService.addComponents(
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

  getCategoryiesFieldHeader(): string {
    if (this.selectedCategory === null) {
      return 'Choose category';
    }
    return this.selectedCategory;
  }
}
