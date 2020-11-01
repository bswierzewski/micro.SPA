// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NavigationModule } from '../../core/navigation.module';
import { MaterialModule } from '../../material.module';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserDetailSettingsComponent } from './user/user-detail/user-detail-settings/user-detail-settings.component';
import { UserDetailInformationComponent } from './user/user-detail/user-detail-information/user-detail-information.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleAddComponentDialog } from './role/role-list/role-add/role-add.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UserDetailComponent,
    UserDetailSettingsComponent,
    UserDetailInformationComponent,
    RoleListComponent,
    RoleAddComponentDialog,
  ],
  imports: [AdminRoutingModule, SharedModule, NavigationModule, MaterialModule],
  exports: [],
})
export class AdminModule {}
