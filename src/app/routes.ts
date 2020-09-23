import { NavbarData, SidebarData } from './core/base/navigation/data';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';
import { DeviceListComponent } from './modules/home/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/device/device-detail/device-detail.component';
import { BaseComponent } from './core/base/base.component';
import { AdminDeviceListComponent } from './modules/admin/device/admin-device-list/admin-device-list.component';
import { AdminDeviceDetailComponent } from './modules/admin/device/admin-device-detail/admin-device-detail.component';
import { AdminVersionListComponent } from './modules/admin/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from './modules/admin/version/admin-version-detail/admin-version-detail.component';
import { InformationListComponent } from './modules/admin/information/information-list/information-list.component';
import { DeviceComponentListComponent } from './modules/admin/information/device-component/device-component-list/device-component-list.component';
import { CategoryListComponent } from './modules/admin/information/category/category-list/category-list.component';
import { KindListComponent } from './modules/admin/information/kind/kind-list/kind-list.component';
import { DeviceComponentDetailComponent } from './modules/admin/information/device-component/device-component-detail/device-component-detail.component';
import { CategoryDetailComponent } from './modules/admin/information/category/category-detail/category-detail.component';
import { KindDetailComponent } from './modules/admin/information/kind/kind-detail/kind-detail.component';

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
      { path: 'devices/:id', component: AdminDeviceDetailComponent },
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
    data: {
      navMenuItems: NavbarData.admin.AdminNavMenuItems,
      navExpandedMenuItems: NavbarData.admin.AdminNavExpandedMenuItems,
      sideMenuItems: SidebarData.AdminNavMenuItems,
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
