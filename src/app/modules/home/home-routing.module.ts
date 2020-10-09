import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../modules/home/home/home.component';
import { DashboardComponent } from '../../modules/home/dashboard/dashboard.component';
import { DeviceListComponent } from '../../modules/home/device/device-list/device-list.component';
import { DeviceDetailComponent } from '../../modules/home/device/device-detail/device-detail.component';
import { HomeBaseComponent } from './home-base.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    //canActivate: [AuthGuard],
    component: HomeBaseComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'devices', component: DeviceListComponent },
      { path: 'devices/:id', component: DeviceDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
