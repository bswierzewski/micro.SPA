import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UserDetailInformationComponent } from './user/user-detail/user-detail-information/user-detail-information.component';
import { UserDetailSettingsComponent } from './user/user-detail/user-detail-settings/user-detail-settings.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
        children: [
          {
            path: '',
            component: UserDetailInformationComponent,
          },
          {
            path: 'informations',
            component: UserDetailInformationComponent,
          },
          {
            path: 'settings',
            component: UserDetailSettingsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
