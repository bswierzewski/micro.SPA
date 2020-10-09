import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from '../core/header/header.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [SharedModule, MatToolbarModule, MatListModule, MatMenuModule, MatButtonModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class NavigationModule {}
