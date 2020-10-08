import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from '../../modules/home/home/home.component';
import { DashboardComponent } from '../../modules/home/dashboard/dashboard.component';
import { DeviceListComponent } from '../../modules/home/device/device-list/device-list.component';
import { DeviceDetailComponent } from '../../modules/home/device/device-detail/device-detail.component';
import { DialogDeviceListComponent } from '../../modules/home/dashboard/components/dialog-device-list.component';
import { HomeBaseComponent } from './home-base.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBaseComponent,
    DashboardComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    DialogDeviceListComponent,
    HomeBaseComponent,
  ],
  imports: [CoreModule, HomeRoutingModule],
  exports: [],
})
export class HomeModule {}
