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
import { NavComponent } from './base/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { ErrorInterceptorProvider } from './_services/error.interceprot';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { LocatorDetailComponent } from './base/components/locators/locator-detail/locator-detail.component';
import { LocatorListComponent } from './base/components/locators/locator-list/locator-list.component';
import { ScannerDetailComponent } from './base/components/scanners/scanner-detail/scanner-detail.component';
import { ScannerListComponent } from './base/components/scanners/scanner-list/scanner-list.component';
import { DashboardComponent } from './base/components/dashboard/dashboard.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { LocatorListResolver } from './_resolvers/locator-list.resolver';
import { ScannerListResolver } from './_resolvers/scanner-list.resolver';
import { ScannerDetailResolver } from './_resolvers/scanner-detail.resolver';
import { LocatorDetailResolver } from './_resolvers/locator-detail.resolver';
import { DeviceListResolver } from './_resolvers/device-list.resolver';

export function tokenGetter() {
   return localStorage.getItem('token');
}

const config: SocketIoConfig = { url: 'http://socket.micro.io', options: {} };

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      DashboardComponent,
      LoginComponent,
      BaseComponent,
      LocatorDetailComponent,
      LocatorListComponent,
      ScannerDetailComponent,
      ScannerListComponent,
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
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5001/api/auth'],
         }
      }),
      MatTableModule,
      SocketIoModule.forRoot(config)
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      AlertifyService,
      LocatorListResolver,
      LocatorDetailResolver,
      ScannerListResolver,
      ScannerDetailResolver,
      DeviceListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
