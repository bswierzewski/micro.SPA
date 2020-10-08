import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { JwtModule } from '@auth0/angular-jwt';

import { ErrorInterceptorProvider } from 'src/app/core/interceptors/error.interceptor';
import { AlertService, AuthService } from './core/services';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
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
