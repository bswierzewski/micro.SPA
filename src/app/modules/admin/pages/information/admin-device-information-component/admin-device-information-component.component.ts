import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';
import { ComponentInformationService } from 'src/app/modules/_services/device-information/component-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent implements OnInit {
  categories$: Observable<string[]>;
  components$: Observable<string[]>;
  selectedCategory: any = null;
  selectedComponent: any = null;
  panelOpenState: any;
  constructor(
    private categoriesInformationService: CategoryInformationService,
    private componentInformationService: ComponentInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<
      Component
    >
  ) {
    adminDeviceInformationService.listSource$ = of(['3', '4']);
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.componentInformationService.addComponent(form.value.name);

    form.resetForm();
  }

  onClearClick(): void {
    this.selectedComponent = null;
  }

  onResetClick(): void {
    console.log('Reset ' + this.constructor.name);
  }

  onRemoveClick(item: string): void {
    this.componentInformationService.removeComponent(item);
  }

  getCategoryiesFieldHeader(): string {
    if (this.selectedCategory === null) {
      return 'Choose category';
    }
    return this.selectedCategory;
  }
}
