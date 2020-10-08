import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CoreModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
