import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../../core/navigation.module';
import { MaterialModule } from '../../material.module';

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
  imports: [HomeRoutingModule, SharedModule, MaterialModule, NavigationModule],
  exports: [],
})
export class HomeModule {}
