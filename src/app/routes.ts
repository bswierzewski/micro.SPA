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
        //canActivate: [AuthGuard],
        component: DashboardBaseComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'panel', component: PanelComponent },
            { path: 'devices', component: DeviceListComponent },
            { path: 'devices/:id', component: DeviceDetailComponent },
        ]
    },
    {
        path: 'admin',
        runGuardsAndResolvers: 'always',
        //canActivate: [AuthGuard],
        component: AdminBaseComponent,
        children: []
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
