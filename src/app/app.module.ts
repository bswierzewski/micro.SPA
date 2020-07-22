import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { MatTableModule } from '@angular/material/table';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceprot';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminBaseComponent } from './admin/admin-base.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthBaseComponent } from './auth/auth-base.component';
import { DashboardBaseComponent } from './dashboard/dashboard-base.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { DeviceListComponent } from './dashboard/device/device-list/device-list.component';
import { DeviceDetailComponent } from './dashboard/device/device-detail/device-detail.component';
import { HomeComponent } from './dashboard/home/home.component'
import { PanelComponent } from './dashboard/panel/panel.component';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';
import { AdminVersionAddComponent } from './admin/components/version/admin-version-add/admin-version-add.component';
import { AdminVersionListComponent } from './admin/components/version/admin-version-list/admin-version-list.component';
import { AdminDeviceListComponent } from './admin/components/device/admin-device-list/admin-device-list.component';
import { AdminDeviceDetailComponent } from './admin/components/device/admin-device-detail/admin-device-detail.component';
import { AdminDeviceAddComponent } from './admin/components/device/admin-device-add/admin-device-add.component';
import { KindsComponent } from './dashboard/kinds/kinds.component';
import { ComponentsComponent } from './dashboard/components/components.component';
import { CategoryListComponent } from './dashboard/categories/category-list/category-list.component';
import { CategoryDetailComponent } from './dashboard/categories/category-detail/category-detail.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      AdminNavComponent,
      AdminBaseComponent,
      AuthBaseComponent,
      LoginComponent,
      DashboardNavComponent,
      DashboardBaseComponent,
      DeviceListComponent,
      DeviceDetailComponent,
      HomeComponent,
      PanelComponent,
      AdminPanelComponent,
      AdminVersionAddComponent,
      AdminVersionListComponent,
      AdminDeviceListComponent,
      AdminDeviceDetailComponent,
      AdminDeviceAddComponent,
      KindsComponent,
      ComponentsComponent,
      CategoryListComponent,
      CategoryDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter
         }
      }),
      MatTableModule,
      TabsModule.forRoot(),
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
