import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DeviceListComponent } from './modules/home/pages/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/pages/device/device-detail/device-detail.component';
import { BaseComponent } from './modules/base/base.component';
import { AdminVersionCreateComponent } from './modules/admin/pages/version/admin-version-create/admin-version-create.component';
import { AdminDeviceCreateComponent } from './modules/admin/pages/device/admin-device-create/admin-device-create.component';
import { AdminDeviceListComponent } from './modules/admin/pages/device/admin-device-list/admin-device-list.component';
import { AdminDeviceDetailComponent } from './modules/admin/pages/device/admin-device-detail/admin-device-detail.component';
import { AdminVersionListComponent } from './modules/admin/pages/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from './modules/admin/pages/version/admin-version-detail/admin-version-detail.component';
import { NavMenuItem } from './modules/base/components/navbar/Models/NavMenuItem';
import { SideMenuItem } from './modules/base/components/sidebar/Models/SideMenuItem';

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
      navMenuItems: [
        { path: '/home', title: 'Home', icon: 'home' },
        { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
        { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
      ] as NavMenuItem[],
      navExpandedMenuItems: [
        { path: '/admin', title: 'Admin', icon: 'admin_panel_settings' },
        {
          path: '',
          title: 'Logout',
          icon: 'exit_to_app',
        },
      ] as NavMenuItem[],
      sideMenuItems: [
        { path: '/home', title: 'Home', icon: 'home' },
        { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
        { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
        { path: '/admin', title: 'Admin', icon: 'admin_panel_settings' },
        {
          path: '',
          title: 'Logout',
          icon: 'exit_to_app',
        },
      ] as SideMenuItem[],
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
      { path: 'devices/create', component: AdminDeviceCreateComponent },
      { path: 'devices/:id', component: AdminDeviceDetailComponent },
      { path: 'versions', component: AdminVersionListComponent },
      { path: 'versions/create', component: AdminVersionCreateComponent },
      { path: 'versions/:id', component: AdminVersionDetailComponent },
    ],
    data: {
      navMenuItems: [
        {
          path: '/admin/devices',
          title: 'Devices',
          icon: 'perm_device_information',
        },
        {
          path: '/admin/versions',
          title: 'Versions',
          icon: 'swap_vertical_circle',
        },
      ] as NavMenuItem[],
      navExpandedMenuItems: [
        { path: '/home', title: 'Home', icon: 'home' },
        {
          path: '',
          title: 'Logout',
          icon: 'exit_to_app',
        },
      ] as NavMenuItem[],
      sideMenuItems: [
        { path: '/portal', title: 'Portal', icon: 'home' },
        {
          path: '/admin/devices',
          title: 'Devices',
          icon: 'perm_device_information',
        },
        {
          path: '/admin/versions',
          title: 'Versions',
          icon: 'admin_panel_settings',
        },
        {
          path: '',
          title: 'Logout',
          icon: 'exit_to_app',
        },
      ] as SideMenuItem[],
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
