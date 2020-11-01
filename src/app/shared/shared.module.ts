import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Directives
import { HasRoleDirective } from '../shared/directives/has-role.directive';

@NgModule({
  declarations: [HasRoleDirective],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule, FlexLayoutModule],
  exports: [CommonModule, RouterModule, FormsModule, HttpClientModule, FlexLayoutModule, HasRoleDirective],
})
export class SharedModule {}
