import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DeviceListComponent } from './modules/home/pages/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/pages/device/device-detail/device-detail.component';
import { BaseComponent } from './modules/base/base.component';
import { AdminDeviceListComponent } from './modules/admin/pages/device/admin-device-list/admin-device-list.component';
import { AdminDeviceDetailComponent } from './modules/admin/pages/device/admin-device-detail/admin-device-detail.component';
import { AdminVersionListComponent } from './modules/admin/pages/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from './modules/admin/pages/version/admin-version-detail/admin-version-detail.component';
import { SidebarData } from './modules/base/components/navigation/sidebar/SidebarData';
import { NavbarData } from './modules/base/components/navigation/navbar/NavbarData';
import { AdminDeviceInformationComponent } from './modules/admin/pages/information/admin-device-information/admin-device-information.component';
import { AdminDeviceInformationKindComponent } from './modules/admin/pages/information/admin-device-information-kind/admin-device-information-kind.component';
import { AdminDeviceInformationCategoryComponent } from './modules/admin/pages/information/admin-device-information-category/admin-device-information-category.component';
import { AdminDeviceInformationComponentComponent } from './modules/admin/pages/information/admin-device-information-component/admin-device-information-component.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    runGuardsAndResolvers: 'always',
    component: LoginComponent,
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    // canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'devices', component: DeviceListComponent },
      { path: 'devices/:id', component: DeviceDetailComponent },
    ],
    data: {
      navMenuItems: NavbarData.home.HomeNavMenuItems,
      navExpandedMenuItems: NavbarData.home.HomeNavExpandedMenuItems,
      sideMenuItems: SidebarData.HomeNavMenuItems,
    },
  },
  {
    path: 'admin',
    runGuardsAndResolvers: 'always',
    // canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
      { path: '', component: AdminDeviceListComponent },
      { path: 'devices', component: AdminDeviceListComponent },
      {
        path: 'devices/create',
        component: AdminDeviceDetailComponent,
        data: { isCreatedMode: true },
      },
      {
        path: 'devices/:id',
        component: AdminDeviceDetailComponent,
        data: { isCreatedMode: false },
      },
      {
        path: 'devices_information',
        component: AdminDeviceInformationComponent,
        children: [
          { path: 'kind', component: AdminDeviceInformationKindComponent },
          {
            path: 'category',
            component: AdminDeviceInformationCategoryComponent,
          },
          {
            path: 'component',
            component: AdminDeviceInformationComponentComponent,
          },
        ],
      },
      { path: 'versions', component: AdminVersionListComponent },
      {
        path: 'versions/create',
        component: AdminVersionDetailComponent,
        data: { isCreatedMode: true },
      },
      {
        path: 'versions/:id',
        component: AdminVersionDetailComponent,
        data: { isCreatedMode: false },
      },
    ],
    data: {
      navMenuItems: NavbarData.admin.AdminNavMenuItems,
      navExpandedMenuItems: NavbarData.admin.AdminNavExpandedMenuItems,
      sideMenuItems: SidebarData.AdminNavMenuItems,
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
