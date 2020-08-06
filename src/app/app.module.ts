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
  ],
  imports: [
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
