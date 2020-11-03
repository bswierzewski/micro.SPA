import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

import { HeaderComponent } from '../core/header/header.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { MenuButtonComponent } from '../shared/components/menu-button/menu-button.component';
import { ThemePickerComponent } from '../shared/components/theme-picker/theme-picker.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, MenuButtonComponent, ThemePickerComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class NavigationModule {}
