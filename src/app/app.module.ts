import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './modules/base/components/navigation/navbar/navbar.component';
import { SidebarComponent } from './modules/base/components/navigation/sidebar/sidebar.component';
import { BaseComponent } from './modules/base/base.component';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DeviceListComponent } from './modules/home/pages/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/pages/device/device-detail/device-detail.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DialogDeviceListComponent } from './modules/home/pages/dashboard/components/dialog-device-list.component';

import { AdminDeviceInformationComponentComponent } from './modules/admin/pages/information/admin-device-information-component/admin-device-information-component.component';
import { AdminDeviceInformationKindComponent } from './modules/admin/pages/information/admin-device-information-kind/admin-device-information-kind.component';
import { AdminDeviceInformationCategoryComponent } from './modules/admin/pages/information/admin-device-information-category/admin-device-information-category.component';
import { AdminDeviceInformationComponent } from './modules/admin/pages/information/admin-device-information/admin-device-information.component';
import { AdminDeviceDetailComponent } from './modules/admin/pages/device/admin-device-detail/admin-device-detail.component';
import { AdminDeviceListComponent } from './modules/admin/pages/device/admin-device-list/admin-device-list.component';
import { AdminVersionListComponent } from './modules/admin/pages/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from './modules/admin/pages/version/admin-version-detail/admin-version-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    HomeComponent,
    DashboardComponent,
    DialogDeviceListComponent,
    AdminDeviceDetailComponent,
    AdminDeviceListComponent,
    AdminVersionListComponent,
    AdminVersionDetailComponent,
    NavbarComponent,
    SidebarComponent,
    BaseComponent,
    AdminDeviceInformationCategoryComponent,
    AdminDeviceInformationKindComponent,
    AdminDeviceInformationComponentComponent,
    AdminDeviceInformationComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
