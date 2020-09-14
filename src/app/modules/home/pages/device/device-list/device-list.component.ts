import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/modules/models/Device';
import { Category } from 'src/app/modules/models/device-information/Category';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { DeviceComponentInformationService } from 'src/app/modules/_services/device-information/device-component-information.service';
import { DeviceService } from 'src/app/modules/_services/device.service';
import { DeviceParams } from 'src/app/modules/_services/Params/DeviceParams';
import { filter, map } from 'rxjs/operators';

export interface DeviceParamsData {
  category?: Category;
  kind?: Kind;
  components?: DeviceComponent[];
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

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private kindInformationService: KindInformationService,
    private deviceService: DeviceService
  ) {}
  ngOnInit(): void {
    this.categories$ = this.categoriesInformationService.getCategories();
    this.kinds$ = this.kindInformationService.getKinds();
  }

  onCardClick(item: any): void {
    console.log(item);
  }

  onApplyFilterClick(): void {
    // this.devices$ = this.deviceService.getDevices(deviceParams);

    console.log(this.deviceParams);

    if (
      this.deviceParams.components &&
      this.deviceParams.components.length > 0
    ) {
      console.log(this.deviceParams.components.map((x) => x.id));
    }
  }

  onResetFilterClick(): void {
    this.deviceParams = {};
  }

  categorySelectionChange(category: Category): void {
    this.components$ = this.deviceComponentInformationService.getDeviceComponents();
  }

  getDeviceComponentsLabelDescripton(category: any): string {
    if (category) {
      return 'Choose category';
    }

    return 'Device components';
  }
}
