import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceprot';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminBaseComponent } from './admin/admin-base.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthBaseComponent } from './auth/auth-base.component';
import { DashboardBaseComponent } from './dashboard/dashboard-base.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { PanelListComponent } from './dashboard/components/panels/panel-list/panel-list.component';
import { PanelDetailComponent } from './dashboard/components/panels/panel-detail/panel-detail.component';
import { DeviceListComponent } from './dashboard/components/devices/device-list/device-list.component';
import { DeviceDetailComponent } from './dashboard/components/devices/device-detail/device-detail.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

const config: SocketIoConfig = { url: 'http://socket.micro.io', options: {} };

@NgModule({
   declarations: [
      AppComponent,
      AdminNavComponent,
      AdminBaseComponent,
      AuthBaseComponent,
      LoginComponent,
      DashboardNavComponent,
      DashboardBaseComponent,
      PanelListComponent,
      PanelDetailComponent,
      DeviceListComponent,
      DeviceDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter
         }
      }),
      MatTableModule,
      SocketIoModule.forRoot(config)
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
