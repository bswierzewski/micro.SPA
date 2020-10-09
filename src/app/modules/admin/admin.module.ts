// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NavigationModule } from '../../core/navigation.module';
import { MaterialModule } from '../../material.module';

import { AdminDeviceTabComponent } from '../../modules/admin/device/admin-device-tab/admin-device-tab.component';
import { AdminDeviceAddressComponent } from '../../modules/admin/device/admin-device-address/admin-device-address.component';
import { AdminDeviceListComponent } from '../../modules/admin/device/admin-device-list/admin-device-list.component';
import { AdminDeviceDetailComponent } from '../../modules/admin/device/admin-device-detail/admin-device-detail.component';

import { AdminVersionListComponent } from '../../modules/admin/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from '../../modules/admin/version/admin-version-detail/admin-version-detail.component';

import { InformationListComponent } from '../../modules/admin/information/information-list/information-list.component';
import { KindListComponent } from '../../modules/admin/information/kind/kind-list/kind-list.component';
import { KindDetailComponent } from '../../modules/admin/information/kind/kind-detail/kind-detail.component';
import { DeviceComponentListComponent } from '../../modules/admin/information/device-component/device-component-list/device-component-list.component';
import { DeviceComponentDetailComponent } from '../../modules/admin/information/device-component/device-component-detail/device-component-detail.component';
import { CategoryListComponent } from '../../modules/admin/information/category/category-list/category-list.component';
import { CategoryDetailComponent } from '../../modules/admin/information/category/category-detail/category-detail.component';

import { IconPickerComponent } from '../../shared/components/icon-picker/icon-picker.component';
import { AdminComponent } from './admin.component';
@NgModule({
  declarations: [
    AdminDeviceTabComponent,
    AdminDeviceAddressComponent,
    AdminDeviceListComponent,
    AdminDeviceDetailComponent,
    AdminVersionListComponent,
    AdminVersionDetailComponent,
    InformationListComponent,
    KindListComponent,
    KindDetailComponent,
    DeviceComponentListComponent,
    DeviceComponentDetailComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    IconPickerComponent,
    AdminComponent,
  ],
  imports: [AdminRoutingModule, SharedModule, NavigationModule, MaterialModule],
  exports: [],
})
export class AdminModule {}
