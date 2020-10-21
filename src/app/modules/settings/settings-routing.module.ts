import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings.component';

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

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    //canActivate: [AuthGuard],
    component: SettingsComponent,
    children: [
      {
        path: '',
        component: SettingsDeviceTabComponent,
        children: [
          { path: '', component: SettingsDeviceListComponent },
          { path: 'devices', component: SettingsDeviceListComponent },
          { path: 'devices/:id', component: SettingsDeviceDetailComponent },
          { path: 'addresses', component: SettingsDeviceAddressComponent },
        ],
      },
      {
        path: 'information',
        component: InformationListComponent,
        children: [
          { path: 'kinds', component: KindListComponent },
          { path: 'categories', component: CategoryListComponent },
          { path: 'components', component: DeviceComponentListComponent },
        ],
      },
      { path: 'kinds/:id', component: KindDetailComponent },
      { path: 'categories/:id', component: CategoryDetailComponent },
      { path: 'components/:id', component: DeviceComponentDetailComponent },

      { path: 'versions', component: SettingsVersionListComponent },
      { path: 'versions/:id', component: SettingsVersionDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
