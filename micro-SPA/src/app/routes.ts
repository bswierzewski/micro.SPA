import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LocatorListResolver } from './_resolvers/locator-list.resolver';
import { ScannerListResolver } from './_resolvers/scanner-list.resolver';
import { LoginComponent } from './login/login.component';
import { LocatorListComponent } from './base/components/locators/locator-list/locator-list.component';
import { LocatorDetailComponent } from './base/components/locators/locator-detail/locator-detail.component';
import { ScannerListComponent } from './base/components/scanners/scanner-list/scanner-list.component';
import { ScannerDetailComponent } from './base/components/scanners/scanner-detail/scanner-detail.component';
import { DashboardComponent } from './base/components/dashboard/dashboard.component';
import { LocatorDetailResolver } from './_resolvers/locator-detail.resolver';
import { DeviceListResolver } from './_resolvers/device-list.resolver';
import { ScannerDetailResolver } from './_resolvers/scanner-detail.resolver';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'locators', component: LocatorListComponent, resolve: { locators: LocatorListResolver } },
            { path: 'locators/:id', component: LocatorDetailComponent, resolve: { locator: LocatorDetailResolver } },
            { path: 'scanners', component: ScannerListComponent, resolve: { scanners: ScannerListResolver } },
            { path: 'scanners/:id', component: ScannerDetailComponent, resolve: { scanner: ScannerDetailResolver } },
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
