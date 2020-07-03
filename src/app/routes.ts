import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardBaseComponent } from './dashboard/dashboard-base.component';
import { AdminBaseComponent } from './admin/admin-base.component';
import { AuthBaseComponent } from './auth/auth-base.component';
import { DeviceListComponent } from './dashboard/components/device/device-list/device-list.component';
import { DeviceDetailComponent } from './dashboard/components/device/device-detail/device-detail.component';
import { HomeComponent } from './dashboard/components/home/home.component'
import { PanelComponent } from './dashboard/components/panel/panel.component';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';
import { AdminVersionListComponent } from './admin/components/version/admin-version-list/admin-version-list.component';
import { AdminVersionAddComponent } from './admin/components/version/admin-version-add/admin-version-add.component';
import { AdminDeviceDetailComponent } from './admin/components/device/admin-device-detail/admin-device-detail.component';
import { AdminDeviceListComponent } from './admin/components/device/admin-device-list/admin-device-list.component';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: AuthBaseComponent,
        children: [
            { path: '', component: LoginComponent },
        ]
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        component: DashboardBaseComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'panel', component: PanelComponent },
            { path: 'devices', component: DeviceListComponent },
            { path: 'devices/:id', component: DeviceDetailComponent },
        ]
    },
    {
        path: 'admin',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        component: AdminBaseComponent,
        children: [
            { path: '', component: AdminPanelComponent },
            { path: 'devices', component: AdminDeviceListComponent },
            { path: 'devices/:id', component: AdminDeviceDetailComponent },
            { path: 'versions', component: AdminVersionListComponent },
            { path: 'versions/add', component: AdminVersionAddComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
