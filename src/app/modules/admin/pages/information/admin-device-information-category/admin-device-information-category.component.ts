import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';
import { ComponentInformationService } from 'src/app/modules/_services/device-information/component-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/modules/models/device-information/Category';
@Component({
  selector: 'app-admin-device-information-category',
  templateUrl: './admin-device-information-category.component.html',
  styleUrls: ['./admin-device-information-category.component.scss'],
})
export class AdminDeviceInformationCategoryComponent implements OnInit {
  categories$: Observable<string[]>;
  components$: Observable<string[]>;
  selectedComponents: any = [];
  selectedCategory: any = null;
  panelOpenState: any;

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private componentInformationService: ComponentInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<
      Category
    >
  ) {
    adminDeviceInformationService.listSource$ = of(['1', '2']);
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.categoriesInformationService.addCategory(form.value.name);

    form.resetForm();
  }

  onClearClick(): void {
    this.selectedCategory = null;
  }

  onResetClick(): void {
    console.log('Reset ' + this.constructor.name);
  }

  onRemoveClick(item: string): void {
    this.categoriesInformationService.removeCategory(item);
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
