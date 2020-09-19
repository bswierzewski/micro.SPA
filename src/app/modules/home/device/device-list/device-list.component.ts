import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeviceComponent, Category, Kind, Device } from 'src/app/shared/models';
import { DeviceParams } from 'src/app/shared/params';
import {
  DeviceComponentInformationService,
  CategoryInformationService,
  KindInformationService,
  DeviceService,
} from 'src/app/core/_services';

export interface DeviceParamsData {
  category?: Category;
  kind?: Kind;
  deviceComponents?: DeviceComponent[];
}

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  kinds$: Observable<Kind[]>;
  categories$: Observable<Category[]>;
  components$: Observable<DeviceComponent[]>;
  devices$: Observable<Device[]>;

  deviceParams: DeviceParamsData = {};

  isCategorySelected = () => {
    return this.deviceParams?.category;
  };

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private kindInformationService: KindInformationService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.loadDevices();
    this.categories$ = this.categoriesInformationService.getCategories();
    this.kinds$ = this.kindInformationService.getKinds();
  }

  onApplyFilterClick(): void {
    this.loadDevices();
  }

  onResetFilterClick(): void {
    this.deviceParams = {};

    this.loadDevices();
  }

  categorySelectionChange(category: Category): void {
    if (category) {
      this.components$ = this.deviceComponentInformationService.getDeviceComponents(
        category.id
      );
    } else {
      this.components$ = of([]);
    }
  }

  loadDevices(): void {
    let componentIds = [];

    if (this.deviceParams?.deviceComponents) {
      componentIds = this.deviceParams.deviceComponents.map((x) => x.id);
    }

    this.devices$ = this.deviceService.getDevices({
      categoryId: this.deviceParams?.category?.id,
      kindId: this.deviceParams?.kind?.id,
      componentIds,
    } as DeviceParams);
  }

  getDeviceComponentsLabelDescripton(category: Category): string {
    if (!category) {
      return 'Choose category';
    }
    return 'Device components';
  }

  getDeviceComponentsTriggerText(): string {
    if (this.deviceParams.deviceComponents) {
      const length = this.deviceParams.deviceComponents.length;
      if (length === 1) {
        return this.deviceParams.deviceComponents[0].name;
      }
      if (length > 1) {
        return `${this.deviceParams.deviceComponents[0].name} (+ ${
          length - 1
        } ${length === 2 ? 'other' : 'others'})`;
      }
    }
    return '';
  }
}
