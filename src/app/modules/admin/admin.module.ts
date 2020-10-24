// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NavigationModule } from '../../core/navigation.module';
import { MaterialModule } from '../../material.module';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [AdminComponent, UserListComponent, UserDetailComponent],
  imports: [AdminRoutingModule, SharedModule, NavigationModule, MaterialModule],
  exports: [],
})
export class AdminModule {}
