import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from 'src/app/core/_services/error.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/base/navigation/navbar/navbar.component';
import { SidebarComponent } from './core/base/navigation/sidebar/sidebar.component';
import { BaseComponent } from './core/base/base.component';

import { LoginComponent } from './core/authentication/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';
import { DeviceListComponent } from './modules/home/device/device-list/device-list.component';
import { DeviceDetailComponent } from './modules/home/device/device-detail/device-detail.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';
import { DialogDeviceListComponent } from './modules/home/dashboard/components/dialog-device-list.component';

import { AdminDeviceDetailComponent } from './modules/admin/device/admin-device-detail/admin-device-detail.component';
import { AdminDeviceListComponent } from './modules/admin/device/admin-device-list/admin-device-list.component';
import { AdminVersionListComponent } from './modules/admin/version/admin-version-list/admin-version-list.component';
import { AdminVersionDetailComponent } from './modules/admin/version/admin-version-detail/admin-version-detail.component';
import { IconPickerComponent } from './shared/components/icon-picker/icon-picker.component';
import { InformationListComponent } from './modules/admin/information/information-list/information-list.component';
import { KindListComponent } from './modules/admin/information/kind/kind-list/kind-list.component';
import { KindDetailComponent } from './modules/admin/information/kind/kind-detail/kind-detail.component';
import { DeviceComponentDetailComponent } from './modules/admin/information/device-component/device-component-detail/device-component-detail.component';
import { DeviceComponentListComponent } from './modules/admin/information/device-component/device-component-list/device-component-list.component';
import { CategoryListComponent } from './modules/admin/information/category/category-list/category-list.component';
import { CategoryDetailComponent } from './modules/admin/information/category/category-detail/category-detail.component';
import { AdminDeviceTabComponent } from './modules/admin/device/admin-device-tab/admin-device-tab.component';
import { AdminDeviceAddressComponent } from './modules/admin/device/admin-device-address/admin-device-address.component';
import { AlertService, AuthService } from './core/_services';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    IconPickerComponent,
    InformationListComponent,
    KindListComponent,
    KindDetailComponent,
    DeviceComponentDetailComponent,
    DeviceComponentListComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    AdminDeviceTabComponent,
    AdminDeviceAddressComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
  providers: [ErrorInterceptorProvider, AuthService, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
