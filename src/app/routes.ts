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
import { SidebarData } from './modules/base/components/navigation/data/SidebarData';
import { NavbarData } from './modules/base/components/navigation/data/NavbarData';

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
      { path: 'devices/create', component: AdminDeviceCreateComponent },
      { path: 'devices/:id', component: AdminDeviceDetailComponent },
      { path: 'versions', component: AdminVersionListComponent },
      { path: 'versions/create', component: AdminVersionCreateComponent },
      { path: 'versions/:id', component: AdminVersionDetailComponent },
    ],
    data: {
      navMenuItems: NavbarData.admin.AdminNavMenuItems,
      navExpandedMenuItems: NavbarData.admin.AdminNavExpandedMenuItems,
      sideMenuItems: SidebarData.AdminNavMenuItems,
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
