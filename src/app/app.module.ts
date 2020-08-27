import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeBaseComponent } from './modules/home/home-base.component';
import { AdminBaseComponent } from './modules/admin/admin-base.component';
import { HomeNavbarComponent } from './modules/home/components/home-navbar/home-navbar.component';
import { DeviceListComponent } from './modules/home/pages/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/pages/device/device-detail/device-detail.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DialogDeviceListComponent } from './modules/home/pages/dashboard/components/dialog-device-list.component';
import { HomeSideNavbarComponent } from './modules/home/components/home-side-navbar/home-side-navbar.component';

import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './modules/admin/components/admin-navbar/admin-navbar.component';
import { AdminSideNavbarComponent } from './modules/admin/components/admin-side-navbar/admin-side-navbar.component';
import { AdminDeviceDetailComponent } from './modules/admin/pages/device/admin-device-detail/admin-device-detail.component';
import { AdminDeviceListComponent } from './modules/admin/pages/device/admin-device-list/admin-device-list.component';
import { AdminVersionListComponent } from './modules/admin/pages/version/admin-version-list/admin-version-list.component';
import { AdminVersionCreateComponent } from './modules/admin/pages/version/admin-version-create/admin-version-create.component';
import { AdminVersionDetailComponent } from './modules/admin/pages/version/admin-version-detail/admin-version-detail.component';
import { AdminDeviceCreateComponent } from './modules/admin/pages/device/admin-device-create/admin-device-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeBaseComponent,
    AdminBaseComponent,
    HomeNavbarComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    HomeComponent,
    DashboardComponent,
    DialogDeviceListComponent,
    HomeSideNavbarComponent,
    AdminNavbarComponent,
    AdminSideNavbarComponent,
    AdminDeviceDetailComponent,
    AdminDeviceListComponent,
    AdminVersionListComponent,
    AdminVersionCreateComponent,
    AdminVersionDetailComponent,
    AdminDeviceCreateComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
