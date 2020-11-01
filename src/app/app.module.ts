// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Interceptors
import { ErrorInterceptor, JwtInterceptor } from 'src/app/core/interceptors';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import {
  KindEffects,
  ComponentEffects,
  CategoryEffects,
  DeviceEffects,
  VersionEffects,
  RegistrationEffects,
  AddressEffects,
  UserEffects,
  RoleEffects,
} from './store/effects';
import { reducers } from './store/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    // Modules
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      KindEffects,
      ComponentEffects,
      CategoryEffects,
      DeviceEffects,
      VersionEffects,
      RegistrationEffects,
      AddressEffects,
      UserEffects,
      RoleEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
