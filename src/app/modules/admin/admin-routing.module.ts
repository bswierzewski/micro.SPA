import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
