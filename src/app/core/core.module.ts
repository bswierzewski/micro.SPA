// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

// Components
import { HeaderComponent } from '../core/header/header.component';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule, HttpClientModule, RouterModule],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HeaderComponent,
    SidenavComponent,
  ],
})
export class CoreModule {}
