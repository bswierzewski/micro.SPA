import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardBaseComponent } from './dashboard/dashboard-base.component';
import { AdminBaseComponent } from './admin/admin-base.component';
import { AuthBaseComponent } from './auth/auth-base.component';
import { PanelListComponent } from './dashboard/components/panels/panel-list/panel-list.component';
import { PanelDetailComponent } from './dashboard/components/panels/panel-detail/panel-detail.component';
import { DeviceListComponent } from './dashboard/components/devices/device-list/device-list.component';
import { DeviceDetailComponent } from './dashboard/components/devices/device-detail/device-detail.component';

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
            { path: 'panels', component: PanelListComponent },
            { path: 'panels/:id', component: PanelDetailComponent },
            { path: 'devices', component: DeviceListComponent },
            { path: 'devices/:id', component: DeviceDetailComponent },
        ]
    },
    {
        path: 'admin',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        component: AdminBaseComponent,
        children: []
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
