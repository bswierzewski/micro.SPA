// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { NavigationModule } from '../../core/navigation.module';
import { MaterialModule } from '../../material.module';

import { SettingsDeviceTabComponent } from '../../modules/settings/device/settings-device-tab/settings-device-tab.component';
import { SettingsDeviceAddressComponent } from '../../modules/settings/device/settings-device-address/settings-device-address.component';
import { SettingsDeviceListComponent } from '../../modules/settings/device/settings-device-list/settings-device-list.component';
import { SettingsDeviceDetailComponent } from '../../modules/settings/device/settings-device-detail/settings-device-detail.component';

import { SettingsVersionListComponent } from '../../modules/settings/version/settings-version-list/settings-version-list.component';
import { SettingsVersionDetailComponent } from '../../modules/settings/version/settings-version-detail/settings-version-detail.component';

import { InformationListComponent } from '../../modules/settings/information/information-list/information-list.component';
import { KindListComponent } from '../../modules/settings/information/kind/kind-list/kind-list.component';
import { KindDetailComponent } from '../../modules/settings/information/kind/kind-detail/kind-detail.component';
import { DeviceComponentListComponent } from '../../modules/settings/information/device-component/device-component-list/device-component-list.component';
import { DeviceComponentDetailComponent } from '../../modules/settings/information/device-component/device-component-detail/device-component-detail.component';
import { CategoryListComponent } from '../../modules/settings/information/category/category-list/category-list.component';
import { CategoryDetailComponent } from '../../modules/settings/information/category/category-detail/category-detail.component';

import { IconPickerComponent } from '../../shared/components/icon-picker/icon-picker.component';
import { SettingsComponent } from './settings.component';
@NgModule({
  declarations: [
    SettingsDeviceTabComponent,
    SettingsDeviceAddressComponent,
    SettingsDeviceListComponent,
    SettingsDeviceDetailComponent,
    SettingsVersionListComponent,
    SettingsVersionDetailComponent,
    InformationListComponent,
    KindListComponent,
    KindDetailComponent,
    DeviceComponentListComponent,
    DeviceComponentDetailComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    IconPickerComponent,
    SettingsComponent,
  ],
  imports: [SettingsRoutingModule, SharedModule, NavigationModule, MaterialModule],
  exports: [],
})
export class SettingsModule {}
