import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

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

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    //canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminDeviceTabComponent,
        children: [
          { path: '', component: AdminDeviceListComponent },
          { path: 'devices', component: AdminDeviceListComponent },
          { path: 'devices/:id', component: AdminDeviceDetailComponent },
          { path: 'addresses', component: AdminDeviceAddressComponent },
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

      { path: 'versions', component: AdminVersionListComponent },
      { path: 'versions/:id', component: AdminVersionDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
