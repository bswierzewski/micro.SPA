import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../core/header/header.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    SidenavComponent,
  ],
})
export class SharedModule {}
