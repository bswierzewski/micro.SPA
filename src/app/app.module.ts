// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

// Services
import { ErrorInterceptorProvider } from 'src/app/core/interceptors/error.interceptor';
import { AlertService, AuthService } from './core/services';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { KindEffects, ComponentEffects, CategoryEffects, DeviceEffects, VersionEffects } from './store/effects';
import { reducers } from './store/app.reducer';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
    // Modules
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([KindEffects, ComponentEffects, CategoryEffects, DeviceEffects, VersionEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [AuthService, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
