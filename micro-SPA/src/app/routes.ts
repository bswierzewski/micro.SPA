import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardBaseComponent } from './dashboard/dashboard-base.component';
import { AdminBaseComponent } from './admin/admin-base.component';
import { LocatorListComponent } from './dashboard/components/locators/locator-list/locator-list.component';
import { LocatorDetailComponent } from './dashboard/components/locators/locator-detail/locator-detail.component';
import { ScannerListComponent } from './dashboard/components/scanners/scanner-list/scanner-list.component';
import { ScannerDetailComponent } from './dashboard/components/scanners/scanner-detail/scanner-detail.component';
import { AuthBaseComponent } from './auth/auth-base.component';

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
            { path: 'locators', component: LocatorListComponent },
            { path: 'locators/:id', component: LocatorDetailComponent },
            { path: 'scanners', component: ScannerListComponent },
            { path: 'scanners/:id', component: ScannerDetailComponent },
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
